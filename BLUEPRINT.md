# meixiedu — Project Blueprint

## 1. Project Identity

**Project name:** meixiedu
**Official organization/public website name:** American West Educational Center
**Expected future domain identity:** meixiedu
**Project type:** Informational corporate website
**Primary purpose:** Present the company, explain its role in international education and overseas opportunities, share future operations and news, and provide a clear way for visitors to make contact.

The company works with educational resources and overseas opportunities involving the United States and China. Some recent activities may relate to the YES program and student visits to China, but the website must not make specific claims about programs, partnerships, or official roles until the client provides and approves the content.

---

## 2. Current Product Vision

American West Educational Center will begin with a clean, professional, and welcoming informational website. The technical project and expected future domain identity remain `meixiedu`.

The visual direction should reflect:

- International education
- Cross-cultural exchange
- Youth and student opportunities
- Travel and learning experiences
- Trust, professionalism, and accessibility
- A connection between the United States and China

The first version is intentionally simple. It should establish the website structure and visual foundation without inventing or overcommitting content.

---

## 3. Confirmed Website Scope

### Fully developed pages

#### Home

The homepage should introduce the overall company and provide a clear entry point to the rest of the website.

Possible shell sections include:

- Hero section
- Short company introduction
- General areas of activity
- Featured operations placeholder
- Latest news placeholder
- Contact call-to-action

All wording must remain general until the client provides approved content.

#### About Us

The About Us page should provide a flexible structure for future company information.

Possible sections include:

- Company overview
- Mission
- Vision
- Company background
- Educational focus
- International connections
- Team or leadership placeholder

#### Contact

The Contact page should provide a clear and simple way to reach the company.

Possible sections include:

- General inquiry form
- Email
- Phone
- Office location
- Social media or WeChat
- Inquiry category

The initial form may send an email without storing submissions in a database.

---

## 4. Structural Pages Only

### Business Operations

The Business Operations section must support separate operation pages, but the content will remain empty until the client decides what should be included.

Example routes:

```text
/operations
/operations/yes
/operations/nba-stuff
```

Recommended structure:

```text
src/app/operations/
├── page.tsx
└── [slug]/
    └── page.tsx
```

The reusable operation detail template may reserve space for:

- Operation title
- Hero image
- Summary
- Overview
- Participants or audience
- Activities
- Program details
- Photo gallery
- Contact call-to-action

No specific operation should be described as official, sponsored, partnered, or administered by the company without client confirmation.

### News

The News section must support separate articles and event pages, but the content will remain empty until the client provides material from the old website or other sources.

Example routes:

```text
/news
/news/2025-yes
/news/2026-yes
```

Recommended structure:

```text
src/app/news/
├── page.tsx
└── [slug]/
    └── page.tsx
```

The reusable news detail template may reserve space for:

- Article title
- Date
- Featured image
- Article body
- Photo gallery
- Related articles
- Back-to-news navigation

The initial News landing page may display a neutral message such as:

> News and activity updates will be added soon.

---

## 5. Maintenance Model

The website will initially be maintained directly by the developer.

This means:

- No CMS
- No client admin dashboard
- No client login
- No database
- No custom publishing system
- Content changes are made in the codebase
- Updates are deployed by the developer

This decision may be revisited later if the client requests frequent self-managed updates.

---

## 6. Recommended Technical Stack

```text
Framework: Next.js
Routing: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS
Content: Local project files
Database: None
Authentication: None
Hosting: To be confirmed
Source control: Git and GitHub
```

The project should use reusable components and content structures so that operations and news pages can be added later without redesigning the website.

---

## 7. Suggested Project Structure

```text
meixiedu/
├── public/
│   ├── images/
│   └── documents/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── operations/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── operations/
│   │   ├── news/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── site.ts
│   │   ├── operations.ts
│   │   └── news.ts
│   │
│   ├── lib/
│   └── types/
│
├── AGENTS.md
├── BLUEPRINT.md
├── CODEBASE_MAP.md
├── DAILY_LOG.md
├── DEV_PROCESS.md
├── README.md
└── package.json
```

The exact structure may be adjusted after the Next.js project is initialized, but the separation of routes, reusable components, and local content should remain.

---

## 8. Development Roles

### Project owner and developer

The user will:

- Communicate with the client
- Confirm business requirements
- Approve content and visual direction
- Make final scope decisions
- Review the code and rendered website
- Manage the repository and deployment
- Implement or supervise implementation

### ChatGPT

ChatGPT will primarily assist with administrative and review work, including:

- Maintaining the project blueprint
- Drafting `AGENTS.md`
- Drafting `DEV_PROCESS.md`
- Drafting or updating `CODEBASE_MAP.md`
- Preparing Codex task prompts
- Breaking work into safe development milestones
- Reviewing screenshots, routes, code changes, and documentation
- Identifying inconsistencies, missing requirements, and scope drift
- Helping inspect development progress with the user
- Assisting with client-facing explanations and content organization
- Recommending plugins or external services only when they are genuinely useful

ChatGPT should not invent approved company information, official affiliations, statistics, or program details.

### Codex

Codex will be used as the main coding agent when appropriate.

Codex should:

- Follow `AGENTS.md`, `BLUEPRINT.md`, and `DEV_PROCESS.md`
- Work only within the assigned task
- Inspect the existing codebase before editing
- Preserve established architecture and style
- Avoid unrelated refactoring
- Report files changed
- Run relevant checks
- Update documentation when required
- Clearly report incomplete work, assumptions, or blockers

Codex should not:

- Expand project scope without approval
- Add a CMS, database, authentication, or major dependency unless requested
- Invent client content
- Make unsupported claims about YES or other programs
- Replace established documentation without justification
- Perform destructive repository actions without explicit approval

---

## 9. Plugin and Service Policy

Plugins, third-party services, and external integrations may be used when they provide clear value.

Possible future uses include:

- Image generation or temporary visual assets
- Contact-form email delivery
- Spam prevention
- Analytics
- Maps
- Deployment
- Domain management
- Image hosting or optimization

Rules:

- Do not add a plugin or service merely because it is available.
- Prefer the simplest solution that meets the current requirement.
- Avoid vendor lock-in when a local or standard solution is sufficient.
- Record any new service, dependency, environment variable, or setup step in the project documentation.
- Never expose API keys or credentials in the repository.

---

## 10. Development Workflow

Each development task should follow this process:

### 1. Define the task

The task should state:

- Goal
- Included files or areas
- Excluded work
- Acceptance criteria
- Required checks
- Documentation updates

### 2. Inspect before editing

Before making changes:

- Read the relevant documentation
- Inspect related routes and components
- Confirm the current project state
- Identify reusable patterns
- Avoid duplicating existing work

### 3. Implement a narrow change

Changes should be:

- Small enough to review
- Limited to the approved scope
- Consistent with the current architecture
- Responsive and accessible where applicable

### 4. Verify

At minimum, verify:

- The project builds or compiles
- TypeScript checks pass
- Lint checks pass when configured
- Routes load correctly
- Navigation works
- Desktop and mobile layouts remain usable
- No unsupported content was introduced

### 5. Review together

The user and ChatGPT will inspect:

- Screenshots
- Visual consistency
- Responsive behavior
- Route structure
- Content accuracy
- Code organization
- Documentation changes

### 6. Record progress

After an approved task:

- Update `DAILY_LOG.md`
- Update `CODEBASE_MAP.md` if structure changed
- Update `BLUEPRINT.md` if scope or architecture changed
- Commit the work with a clear message

---

## 11. Documentation Responsibilities

### `BLUEPRINT.md`

Defines:

- Product vision
- Scope
- Architecture
- Roles
- Milestones
- Major project decisions

It should change only when the project direction changes.

### `AGENTS.md`

Defines rules for Codex and other coding agents.

It should include:

- Required reading order
- Scope boundaries
- Coding expectations
- Verification expectations
- Documentation requirements
- Prohibited actions

### `DEV_PROCESS.md`

Defines the repeatable human-and-agent development workflow.

It should include:

- Task preparation
- Prompt structure
- Inspection
- Implementation
- Testing
- Review
- Documentation
- Git workflow

### `CODEBASE_MAP.md`

Provides a factual map of the repository.

It should describe:

- Routes
- Important components
- Content files
- Utilities
- Data flow
- Current implementation status

### `DAILY_LOG.md`

Records completed development sessions.

Each entry should include:

- Date
- Goal
- Work completed
- Files changed
- Verification performed
- Decisions made
- Remaining work
- Suggested next step

---

## 12. Current Development Milestone

### Milestone: Initial Website Shell

The immediate goal is to create a functional and visually coherent American West Educational Center website shell within the `meixiedu` project.

#### Included

- Initialize the Next.js project
- Configure TypeScript
- Configure Tailwind CSS
- Establish global styles
- Build the header
- Build desktop navigation
- Build mobile navigation
- Build the footer
- Create the Home page shell
- Create the About Us page shell
- Create the Contact page shell
- Create the Operations landing-page shell
- Create the reusable operation detail route
- Create the News landing-page shell
- Create the reusable news detail route
- Add general placeholder content
- Establish a responsive visual system
- Create initial project documentation

#### Excluded

- Final client wording
- Final program descriptions
- Final news articles
- Migration of old website content
- Official YES claims
- CMS
- Database
- Authentication
- Client dashboard
- Payment processing
- Customer portal
- Advanced animations
- Complex integrations

---

## 13. Definition of Done for the Initial Shell

The milestone is complete when:

- All main navigation routes exist
- Home, About Us, and Contact have complete shell layouts
- Operations and News have reusable listing and detail templates
- Empty or placeholder states are clear and professional
- Navigation works on desktop and mobile
- The design is consistent across pages
- The website is responsive
- TypeScript and build checks pass
- No database or CMS has been introduced
- No unsupported company or program claims appear
- Core project documentation exists and matches the codebase
- The user and ChatGPT have visually reviewed the implementation

---

## 14. Content Rules

Until the client supplies approved material:

- Use neutral placeholder text
- Avoid fabricated company history
- Avoid fabricated statistics
- Avoid fabricated testimonials
- Avoid fabricated partners
- Avoid fabricated certifications
- Avoid claiming official YES administration or sponsorship
- Avoid presenting sample operations as confirmed services
- Clearly distinguish placeholders from final client content

Temporary content should sound professional enough to evaluate the design but should remain easy to identify and replace.

---

## 15. Client Information Needed Later

The website shell should not be blocked by these questions, but the client will eventually need to provide:

- Official company name and preferred capitalization
- Logo and brand colors
- Company introduction
- Mission and vision
- Company history
- Confirmed business operations
- The company’s exact role in the YES program
- Program names and descriptions
- Old website URL or exported content
- News articles and event dates
- Original photos and usage permission
- Team information
- Office address
- Phone number
- Email address
- WeChat or social-media details
- Preferred website language or bilingual requirements
- Legal and privacy information

---

## 16. Future Possibilities

The architecture may later support:

- English and Chinese localization
- Additional operation pages
- Additional news articles
- Photo galleries
- Search
- Content management
- Inquiry storage
- Newsletter signup
- Partner profiles
- Student application forms
- Program registration
- Analytics
- CRM integration

These are future possibilities only and are not part of the current scope.

---

## 17. Current Guiding Principle

> Build a clean, reusable, and trustworthy website shell first. Let approved client content determine the final operations, news, and program details later.
