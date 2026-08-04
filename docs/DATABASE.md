# KWEST Database Constitution

Design for today's value.

Prepare for tomorrow's scale.

Do not build tomorrow's complexity today.

Version: 1.0 Alpha

Status: Draft

Owner: Founding Team

Last Updated: August 2026

---

# Mission

KWEST exists to become the trusted digital infrastructure for neighbourhoods.

The database is therefore designed to model communities, not merely businesses.

Every future feature must strengthen trust, discovery, local commerce and community.

---

# Core Philosophy

Everything inside KWEST belongs to one of three pillars.

1. Neighbourhoods
2. Listings
3. People

Everything else supports one or more of these pillars.

---

# Pillar One — Neighbourhoods

A neighbourhood is more than a location.

A neighbourhood has:

• Identity

• Geography

• Roads

• Landmarks

• History

• Community

• Businesses

• People

• Relationships with surrounding areas

KWEST models neighbourhoods before businesses.

---

# Pillar Two — Listings

Everything discoverable is a Listing.

A Listing may be:

• Business

• School

• Hospital

• Church

• Mosque

• Government Office

• Police Station

• Restaurant

• Hotel

• Gym

• Market

• Tourist Attraction

• NGO

• Community Centre

Businesses are only one Listing Type.

---

# Pillar Three — People

People make neighbourhoods alive.

Examples include:

• Residents

• Business Owners

• Visitors

• Community Leaders

• Administrators

• Moderators

People interact with Listings.

People belong to Neighbourhoods.

---

# Relationship Model

Neighbourhood

↓

Listings

↓

People

↓

Community

↓

Growth

---

# Database Principles

## Principle 1

Everything has a unique identity.

Never duplicate information.

---

## Principle 2

Everything belongs somewhere.

Nothing exists without geography.

---

## Principle 3

Trust is earned.

Verification is a journey.

Not a checkbox.

---

## Principle 4

Every action creates knowledge.

Searches

Reviews

Phone Calls

Direction Requests

Claims

Bookmarks

All become intelligence.

---

## Principle 5

The database must support millions of Listings without redesign.

Scale is designed from day one.

---

## Principle 6

Collect only information that creates value.

Every field in the database must answer one question:

"Who benefits from storing this?"

If the answer is unclear,

the field should not exist.

# Listing Lifecycle

Seeded

↓

Community Added

↓

Pending Review

↓

Claim Requested

↓

Claimed

↓

Verified

↓

Premium

↓

Archived

---

# Geography Model

Country

↓

County

↓

Constituency

↓

Ward

↓

Neighbourhood

↓

Listing

---

# Future Tables

Neighbourhoods

Listings

Categories

Owners

Users

Reviews

Media

Events

Jobs

Stories

Emergency Services

Community Updates

Analytics

Claims

Bookmarks

Notifications

---

# Long-Term Goal

The database should allow KWEST to expand from one neighbourhood to every neighbourhood in Kenya without changing its core architecture.

---

# Core Entities

The KWEST database is built around the following core entities.

## 1. Neighbourhood

Represents a real community.

Examples:

- Kahawa West
- Nanyuki CBD
- Rongai
- Westlands

A Neighbourhood contains many Listings and many People.

---

## 2. Listing

A discoverable place within a neighbourhood.

Examples:

- Soweto Hardware
- Kamiti Quick Gas
- Mama Lucy Groceries
- Kahawa West Police Station

Every Listing belongs to one Neighbourhood.

---

## 3. Category

Defines what a Listing is.

Examples:

- Hardware
- Pharmacy
- Restaurant
- School
- Church
- Government Office

One Category may contain many Listings.

---

## 4. Owner

Represents an individual or organisation that owns one or more Listings.

One Owner can manage multiple Listings.

---

## 5. User

Represents anyone using KWEST.

Examples:

- Resident
- Visitor
- Business Owner
- Moderator
- Administrator

Users interact with Listings.

---

## 6. Review

Represents community feedback.

A Review belongs to one User and one Listing.

---

## 7. Media

Stores images, logos, videos and documents.

Media belongs to a Listing.

---

## 8. Event

Represents something happening within a neighbourhood.

Examples:

- Market Day
- Blood Donation Drive
- Community Meeting
- Football Tournament

Events belong to a Neighbourhood.

---

## 9. Story

Community news.

Success stories.

Announcements.

Neighbourhood updates.

Stories belong to a Neighbourhood.

---

## 10. Analytics

Captures how people interact with KWEST.

Examples:

- Listing Views
- Search Appearances
- Phone Clicks
- WhatsApp Clicks
- Direction Requests
- Listing Claims

History is preserved, not erased.

---

# Data Preservation Principle

Neighbourhoods evolve.

Businesses open.

Businesses close.

Owners change.

Buildings remain.

Roads expand.

Communities grow.

KWEST is designed to preserve neighbourhood history rather than erase it.

Deleting information is the exception.

Archiving information is the default.

The platform should always prefer preserving historical context whenever it benefits the community.

---

# Living Listings

Listings are living entities.

Every Listing progresses through a lifecycle.

Draft

↓

Seeded

↓

Community Added

↓

Pending Review

↓

Claim Requested

↓

Claimed

↓

Verified

↓

Premium

↓

Ownership Changed

↓

Rebranded

↓

Relocated

↓

Temporarily Closed

↓

Permanently Closed

↓

Archived

Listings should never lose their identity.

Their history is part of the neighbourhood.
---

# Entity Hierarchy

KWEST models the real world using six layers.

## Layer 1 — Geography

Country

↓

County

↓

Constituency

↓

Ward

↓

Neighbourhood

---

## Layer 2 — Physical World

Neighbourhood

↓

Roads

↓

Properties

↓

Landmarks

---

## Layer 3 — Commerce

Properties

↓

Listings

↓

Categories

↓

Owners

---

## Layer 4 — Community

Events

Stories

Jobs

Public Notices

Emergency Services

---

## Layer 5 — People

Residents

Visitors

Business Owners

Moderators

Administrators

---

## Layer 6 — Intelligence

Analytics

Search

Reviews

Claims

Bookmarks

Community Insights

The intelligence layer transforms neighbourhood information into neighbourhood knowledge.