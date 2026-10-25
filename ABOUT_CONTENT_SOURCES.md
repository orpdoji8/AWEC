# About Us content sources — 2026-10-25

Owner requested adapting two supplied Chinese company profiles and displaying their certificates. Website copy is an English editorial adaptation, not a verbatim translation or independent verification.

## Sources

- `美西教育中心简介.pdf`: two pages. Page 1: broad company introduction, business exchange, education and youth exchanges. Page 2: two recognition certificates.
- `美西教育中心简介(1).pdf`: two pages. Page 1: educational introduction, claimed credentials and named institutional relationships, youth exchange. Page 2: mission and activities, followed by the same certificates.
- Files supplied from the owner's WeChat file directory. Original documents remain unchanged and are not published as downloads.

## Published mapping

- California-based organization / US–China education and cultural exchange: both profiles, page 1. Retained established website spelling American West Educational Center; one source omits “al”. No founding year inferred.
- Business visits, international exchange, trade cooperation and exhibition participation: first profile, page 1. General overview only; existing Business placeholder pages unchanged.
- Mission: “教育无国界，文化共成长”, first profile page 1 and second profile page 2. English adaptation: “Education without borders, growing together through culture.”
- School links, student/teacher exchange, camps, study visits, joint teaching, lectures, conferences and seminars: second profile page 2; overlapping content in first profile page 1.
- Language, history/culture, STEAM and community activities: both profiles page 1. Presented generally; no official YES sponsorship/administration assertion.
- Certificates: extracted unchanged JPEG objects from second profile page 2, 461×593 and 462×582. Sharper than first profile's embedded copies. No generated restoration or alteration.
- 2018: recipient American West Educational Center, October 2018, dedication and contributions to educational advancement, Assemblyman Phillip Chen (55th District).
- 2024: recipient Linda Liu, identified on certificate as President of AWEC, August 2024, community contributions and education leadership, Assemblyman Phillip Chen (59th District). Historical certificate wording is not a separate assertion about her current role.

## Omitted or unresolved

- Youth exchange start differs: November 2023 in first profile, 2024 in second. No start date published.
- Government approval/State Department authorization, exclusive Anaheim district authorization, school rankings, named institutional partnerships, NBA/SPIE collaboration, CCBN representation, consultant superlatives and drone-official status: not included in this concise About page. Supporting agreements, authorization evidence or clarification would be needed before expanding those claims.
- No invented founding history, team biographies, testimonials or statistics.
- Certificates are described as recognition, not accreditation or government endorsement of all programs.

## Implementation

`src/content/pages.ts` contains the adapted About copy and certificate metadata. `src/app/about/page.tsx` retains the chapter/anchor layout with Overview, Our mission, Education & exchange, Recognition. Images live in `public/images/about/recognition-awec-2018.jpg` and `recognition-linda-liu-2024.jpg` and can be opened at native resolution.
