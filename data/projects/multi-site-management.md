---
title: "Multi-site Management Tool"
description: "REST API system to manage multiple WordPress websites from one centralized dashboard"
date: "2023-08-20"
tags: ["Laravel", "WordPress", "REST API", "JSON", "XML-RPC", "PHP"]
featured: true
---

## Overview

The Multi-site Management Tool is a centralized platform designed to manage multiple WordPress websites from a single dashboard. This system allows administrators to perform bulk updates, monitor site health, manage content, and synchronize data across dozens of WordPress installations without logging into each site individually.

### The Problem

The client managed over 30 WordPress websites for different departments and locations. Each site required regular updates, content publishing, user management, and monitoring. The manual process was time-consuming, error-prone, and made it difficult to maintain consistency across all sites. They needed a solution to centralize control and automate repetitive tasks.

### Project Goals

- Build a centralized dashboard to control multiple WordPress sites
- Enable bulk operations (updates, content publishing, user management)
- Monitor site health, uptime, and performance metrics
- Synchronize content and settings across selected sites
- Provide secure API communication between dashboard and WordPress sites

---

## My Role and Responsibilities

As the sole developer on this project, I handled all aspects:

- **System Architecture**: Designed the communication protocol between the central dashboard and WordPress sites
- **Laravel Dashboard Development**: Built the main management interface
- **WordPress Plugin Development**: Created custom plugins to expose necessary APIs
- **API Integration**: Implemented secure REST and XML-RPC communication
- **Security Implementation**: Ensured encrypted communication and authentication
- **Testing & Deployment**: Tested across different WordPress versions and hosting environments

---

## Tools & Technologies

- **Backend**: Laravel 9, PHP 8.1
- **CMS**: WordPress (various versions 5.x - 6.x)
- **APIs**: REST API, XML-RPC, JSON
- **Authentication**: OAuth 2.0, API Keys
- **Database**: MySQL for Laravel dashboard
- **Frontend**: Livewire, Alpine.js, Tailwind CSS
- **Deployment**: Apache, cPanel hosting
- **Version Control**: Git, GitHub

---

## Implementation Details

### Laravel Dashboard

Built a comprehensive management dashboard using Laravel:

- **Multi-tenant Architecture**: Each WordPress site registered as a managed entity
- **Bulk Operations Panel**: Interface for executing actions across multiple sites
- **Real-time Monitoring**: Live status updates for all connected sites
- **Scheduled Tasks**: Automated checks and updates using Laravel's task scheduler
- **Activity Logging**: Complete audit trail of all actions performed

### WordPress Plugin

Developed a custom WordPress plugin to enable remote management:

- **Custom REST Endpoints**: Extended WordPress REST API with custom endpoints
- **Authentication Layer**: Secure token-based authentication
- **Remote Action Handlers**: Execute administrative actions via API calls
- **Data Synchronization**: Sync posts, pages, and custom content types
- **Health Check Endpoint**: Monitor site status and performance

### API Communication

Implemented dual-protocol communication for maximum compatibility:

**REST API for Modern Operations**
```php
public function publishPost($siteId, $postData)
{
    $site = Site::findOrFail($siteId);
    
    $response = Http::withToken($site->api_token)
        ->post($site->url . '/wp-json/custom/v1/posts', [
            'title' => $postData['title'],
            'content' => $postData['content'],
            'status' => 'publish',
            'categories' => $postData['categories'],
        ]);
    
    return $response->json();
}
```

**XML-RPC for Legacy Support**
```php
public function updateTheme($siteId, $themeSlug)
{
    $site = Site::findOrFail($siteId);
    
    $client = new \PhpXmlRpc\Client($site->url . '/xmlrpc.php');
    $request = new \PhpXmlRpc\Request('core.updateTheme', [
        new \PhpXmlRpc\Value($site->username, 'string'),
        new \PhpXmlRpc\Value($site->password, 'string'),
        new \PhpXmlRpc\Value($themeSlug, 'string'),
    ]);
    
    return $client->send($request);
}
```

---

## Technical Highlight: Bulk Content Synchronization

The most complex feature was synchronizing content across multiple sites while handling errors gracefully.

### Challenge
Publishing the same content to 30+ sites simultaneously while handling various states: some sites might be offline, have different configurations, or encounter errors during publishing.

### Solution
Implemented a queue-based bulk operation system:

1. **Job Queuing**: Each site operation added to Laravel queue
2. **Error Handling**: Failed jobs automatically retried with exponential backoff
3. **Progress Tracking**: Real-time progress updates via WebSocket
4. **Partial Success**: Successfully published sites marked complete even if others failed
5. **Rollback Capability**: Option to revert changes on all sites if critical errors occur

### Implementation
```php
public function bulkPublishPost($siteIds, $postData)
{
    $batchId = Str::uuid();
    
    foreach ($siteIds as $siteId) {
        PublishPostJob::dispatch($siteId, $postData, $batchId)
            ->onQueue('bulk-operations');
    }
    
    return BulkOperation::create([
        'batch_id' => $batchId,
        'type' => 'publish_post',
        'total_sites' => count($siteIds),
        'status' => 'processing',
    ]);
}
```

### Result
- Successfully publish content to 30+ sites in under 2 minutes
- 98% success rate with automatic retry on failures
- Real-time progress visibility for administrators
- Comprehensive error reporting for failed operations

---

## Key Features

### Site Management
- Add/remove sites with API key validation
- Group sites by category or location
- Batch enable/disable sites from dashboard

### Content Operations
- Publish posts and pages across multiple sites
- Bulk update existing content
- Synchronize media library items
- Replicate custom post types

### Update Management
- Check for WordPress core updates across all sites
- Bulk update plugins and themes
- Schedule automatic update windows
- Rollback capability for failed updates

### Monitoring Dashboard
- Real-time site status (online/offline)
- Performance metrics (load time, uptime)
- Security alerts (outdated software, vulnerabilities)
- Disk usage and database size tracking

### User Management
- Synchronize user accounts across sites
- Bulk role assignments
- Centralized password resets
- Access control management

---

## Outcome

The Multi-site Management Tool transformed the client's workflow and delivered significant time savings:

### Efficiency Gains
- **90% reduction** in time spent on routine site maintenance
- **Content publishing** reduced from 2+ hours to under 5 minutes
- **Update management** reduced from a full day to 30 minutes
- **Eliminated** manual login to individual sites for routine tasks

### Technical Metrics
- Successfully manages **35 active WordPress sites**
- Processes **200+ API calls** per day
- **99.7% uptime** for the management dashboard
- **Zero data loss** incidents during bulk operations

### Business Impact
- Freed up 15+ hours per week for higher-value tasks
- Improved consistency across all managed websites
- Faster response time to security updates
- Reduced human error in site management

---

## Security Considerations

Security was paramount given the sensitive access to multiple websites:

- **Encrypted Communication**: All API calls use HTTPS with certificate validation
- **Token-Based Auth**: Rotating API keys with expiration
- **IP Whitelisting**: Restrict dashboard access to specific IP ranges
- **Activity Logging**: Complete audit trail of all operations
- **Permission System**: Granular control over who can perform bulk operations
- **Two-Factor Authentication**: Required for dashboard access

---

## Challenges Overcome

### WordPress Version Compatibility
Different sites ran different WordPress versions. Solution: Implemented version detection and conditional API calls based on available features.

### Network Reliability
Some sites had unreliable hosting. Solution: Implemented exponential backoff retry logic and timeout handling.

### Performance at Scale
Processing 30+ sites simultaneously. Solution: Queue-based architecture with configurable concurrency limits.

---

## Lessons Learned

- **Fault Tolerance**: Always design for partial failures in distributed systems
- **Clear Feedback**: Users need visibility into long-running operations
- **Security First**: Never compromise on security, even for convenience
- **Version Management**: Always handle backwards compatibility gracefully

---

## Future Enhancements

Planned features include:
- Advanced analytics dashboard
- Automated content migration between sites
- Custom workflow automation (e.g., "if site X publishes, automatically mirror to sites Y and Z")
- Integration with additional CMS platforms beyond WordPress
- Mobile app for emergency site management

---

This project showcased my ability to design and implement complex integrations between different systems. The combination of Laravel's robust backend capabilities and WordPress's extensibility resulted in a powerful tool that dramatically improved operational efficiency.
