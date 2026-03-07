// export type Sentiment = 'positive' | 'neutral' | 'negative';
// export type Category = 'technology' | 'business' | 'science' | 'health' | 'entertainment' | 'sports' | 'general';

// export interface Emotions {
//   joy: number;
//   sadness: number;
//   anger: number;
//   fear: number;
//   surprise: number;
// }

// export interface Comment {
//   id: string;
//   avatar: string;
//   username: string;
//   text: string;
//   timestamp: string;
//   replies?: Comment[];
// }

// export interface Article {
//   id: string;
//   title: string;
//   description: string;
//   content: string;
//   imageUrl: string;
//   source: string;
//   author: string;
//   publishedAt: string;
//   category: Category;
//   country: string;
//   countryCode: string;
//   sentiment: Sentiment;
//   sentimentScore: number;
//   emotions: Emotions;
//   keywords: string[];
//   comments: Comment[];
// }

// export const ARTICLES: Article[] = [
//   {
//     id: '1',
//     title: 'The Best MicroSD Cards for Your Camera, Switch, and More',
//     description: 'Everything you need to know about memory cards for cameras, video game systems, and more.',
//     content: `When it comes to expanding storage for your camera, gaming console, or drone, choosing the right microSD card is crucial. The market is flooded with options from brands like SanDisk, Samsung, and Lexar, each offering different speeds, capacities, and price points.\n\nFor photographers and videographers, the most critical spec is the write speed — you need cards that can keep up with burst photography or 4K video recording without causing your camera to buffer or drop frames.\n\nFor the Nintendo Switch, you need a card that has fast read speeds for loading games quickly. The Switch isn't as demanding as professional cameras, so you can often get away with a mid-range card.\n\nOur top pick for most users is the SanDisk Extreme Pro, which offers excellent speeds at a reasonable price. For those needing maximum performance, the ProGrade Digital COBALT series is hard to beat, though at a premium cost.\n\nWhen buying, always check for counterfeit cards — they're unfortunately common, especially on third-party marketplaces. Stick to reputable retailers and verify the speeds once you receive the card.`,
//     imageUrl: 'https://images.unsplash.com/photo-1642229407991-e28d009cb968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb1NEJTIwbWVtb3J5JTIwY2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTQzMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Wired',
//     author: 'Brad Bourque',
//     publishedAt: 'Feb 28, 2026, 08:00 PM',
//     category: 'technology',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.72,
//     emotions: { joy: 60, sadness: 5, anger: 3, fear: 7, surprise: 25 },
//     keywords: ['MicroSD', 'SanDisk', 'Nintendo Switch', 'Camera', 'Storage', 'Memory Card'],
//     comments: [
//       { id: 'c1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', username: 'TechEnthusiast99', text: 'Great breakdown! I just picked up the SanDisk Extreme Pro for my mirrorless camera and it works flawlessly.', timestamp: '2h ago' },
//       { id: 'c2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka', username: 'GamerPro2026', text: 'For Nintendo Switch users, the 512GB Lexar is on sale right now and it\'s fantastic value.', timestamp: '4h ago', replies: [{ id: 'c2r1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', username: 'SwitchFan', text: 'Thanks for the tip! Just grabbed one.', timestamp: '3h ago' }] },
//     ],
//   },
//   {
//     id: '2',
//     title: "We Might Have Gotten Our First Look at the Villains of 'Spider-Man: Brand New Day'",
//     description: "Plus, the new 'Mystery Science Theater 3000' announces its first movie.",
//     content: `Marvel fans are buzzing after what appears to be the first leaked set photos from the upcoming Spider-Man: Brand New Day film have emerged online. The images, which have not been officially confirmed by Marvel Studios or Sony Pictures, show what many believe to be the main antagonists of the film.\n\nSources close to the production have hinted that the film will draw heavily from the classic comic storyline, introducing both old and new villains into the Marvel Cinematic Universe.\n\nMeanwhile, the beloved cult classic TV series Mystery Science Theater 3000 has announced it will be producing its first feature film. The announcement was made via a crowdfunding campaign that smashed its initial goal within 24 hours.\n\nThe Spider-Man sequel, directed by Destin Daniel Cretton, is expected to begin principal photography next month, with a theatrical release planned for summer 2027.`,
//     imageUrl: 'https://images.unsplash.com/photo-1761026148595-6fd7f4c76091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGlkZXItTWFuJTIwc3VwZXJoZXJvJTIwbW92aWV8ZW58MXx8fHwxNzcyNTQzMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Gizmodo.com',
//     author: 'Gordon Jackson',
//     publishedAt: 'Feb 17, 2026, 11:00 PM',
//     category: 'entertainment',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.81,
//     emotions: { joy: 75, sadness: 3, anger: 2, fear: 5, surprise: 45 },
//     keywords: ['Spider-Man', 'Marvel', 'MCU', 'Movie', 'Villains', 'Mystery Science Theater'],
//     comments: [
//       { id: 'c3', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bubba', username: 'MarvelFanatic', text: 'Can\'t wait! The Brand New Day arc is my favorite Spider-Man story.', timestamp: '6h ago' },
//     ],
//   },
//   {
//     id: '3',
//     title: 'How many AIs does it take to read a PDF?',
//     description: 'Last November, the House Oversight Committee had just released 20,000 pages of documents from the estate of Jeffrey Epstein.',
//     content: `When the House Oversight Committee released 20,000 pages of documents from the estate of Jeffrey Epstein last November, journalists faced an extraordinary challenge: how do you process, search, and make sense of that much information in a timely manner?\n\nThe answer, for many newsrooms, was to deploy artificial intelligence — specifically, large language models capable of reading, summarizing, and cross-referencing thousands of pages at once.\n\nThe Verge spoke with journalists, researchers, and AI experts about how this technology is transforming investigative journalism. The tools ranged from off-the-shelf products like Claude and GPT-4 to custom-built systems designed for document analysis.\n\nBut the process wasn't without friction. AI models hallucinate facts, miss context, and can be misled by redacted or poorly scanned documents. The journalists we spoke to emphasized that AI was a research assistant, not a replacement for human judgment.\n\n"It's like having a very fast, very well-read intern," said one journalist who used AI to analyze the documents. "You still have to check everything."`,
//     imageUrl: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcmVhZGluZyUyMGRvY3VtZW50fGVufDF8fHx8MTc3MjU0MzMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'The Verge',
//     author: 'Josh Dzieza',
//     publishedAt: 'Feb 23, 2026, 07:04 PM',
//     category: 'technology',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'neutral',
//     sentimentScore: 0.12,
//     emotions: { joy: 20, sadness: 15, anger: 10, fear: 25, surprise: 30 },
//     keywords: ['AI', 'PDF', 'Journalism', 'LLM', 'Epstein', 'Document Analysis'],
//     comments: [
//       { id: 'c4', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi', username: 'AIResearcher', text: 'This is a fascinating use case. The hallucination problem is real but manageable with proper validation workflows.', timestamp: '1d ago' },
//     ],
//   },
//   {
//     id: '4',
//     title: "HP ZBook Ultra G1a review: a business-class workstation that's got game",
//     description: 'Business laptops are typically dull computers. Not this one.',
//     content: `HP's ZBook Ultra G1a is not your typical business laptop. While it ticks all the enterprise boxes — robust security features, ISV certifications, and a sturdy magnesium-aluminum chassis — it also packs enough GPU muscle to handle serious creative workloads and even some gaming on the side.\n\nAt its heart is AMD's Ryzen AI 9 HX 375 processor paired with a Radeon RX 7900M graphics card — a combination that makes this 16-inch machine genuinely capable of running modern games at high settings while maintaining the professional pedigree HP's business customers demand.\n\nThe display is a 4K OLED panel with 120Hz refresh rate, and it's absolutely stunning. Color accuracy is near-perfect out of the box, which is great news for the video editors and graphic designers this laptop is aimed at.\n\nBattery life is the usual workstation compromise — about 6-7 hours of mixed use. Not great, but not terrible given the hardware.\n\nAt $3,200, this is expensive. But for professionals who need one machine that does everything, the ZBook Ultra G1a makes a compelling case.`,
//     imageUrl: 'https://images.unsplash.com/photo-1554246247-6993b606e8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHdvcmtzdGF0aW9ufGVufDF8fHx8MTc3MjU0MzMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'The Verge',
//     author: 'Monica Chen',
//     publishedAt: 'Feb 28, 2026, 09:00 AM',
//     category: 'technology',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.68,
//     emotions: { joy: 55, sadness: 5, anger: 5, fear: 5, surprise: 30 },
//     keywords: ['HP ZBook', 'Workstation', 'Laptop', 'AMD', 'Business', 'Review'],
//     comments: [],
//   },
//   {
//     id: '5',
//     title: 'Find My, Photos and Some iCloud Services Experiencing Issues',
//     description: "Apple's Find My feature, photos, and some iCloud services are experiencing service interruptions.",
//     content: `Apple's iCloud services experienced widespread disruptions on Thursday, affecting millions of users worldwide. The outage impacted Find My, Photos, iCloud Drive, and several other core services that iOS and macOS users rely on daily.\n\nApple's System Status page showed multiple services in red, with the company acknowledging the issues and saying engineers were working to resolve them.\n\n"We're aware of this issue and our engineers are working to resolve it as soon as possible," an Apple spokesperson said in a statement.\n\nThe outage, which began around 2 PM EST, left users unable to access their iCloud photos, share their location with friends and family, or sync documents across devices.\n\nUsers took to social media to express frustration, with many pointing out that they rely on Find My to track their AirTags, iPhones, and other Apple devices — a safety concern for parents and those tracking valuable items.\n\nBy 6 PM EST, Apple had resolved most of the issues, though some users were still reporting intermittent problems with photo syncing.`,
//     imageUrl: 'https://images.unsplash.com/photo-1630332159758-c02a3accc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGlQaG9uZSUyMGlDbG91ZCUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyNTQzMzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'MacRumors',
//     author: 'Juli Clover',
//     publishedAt: 'Feb 27, 2026, 04:30 PM',
//     category: 'technology',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'negative',
//     sentimentScore: -0.58,
//     emotions: { joy: 5, sadness: 30, anger: 35, fear: 20, surprise: 10 },
//     keywords: ['Apple', 'iCloud', 'Find My', 'Outage', 'iOS', 'Service Interruption'],
//     comments: [
//       { id: 'c5', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kiki', username: 'AppleUser2026', text: 'This is so frustrating. I use Find My to track my kids\' locations. This kind of outage is unacceptable from Apple.', timestamp: '8h ago' },
//     ],
//   },
//   {
//     id: '6',
//     title: 'Anker and Jackery Kick Off Power Station Sales With Up to 56% Off',
//     description: 'Anker and Jackery have introduced big discounts across their most popular portable power stations this week.',
//     content: `If you've been eyeing a portable power station, now might be the best time to buy. Both Anker and Jackery have launched significant sales events, offering discounts of up to 56% off their popular models.\n\nAnker's SOLIX C1000 — one of the most versatile power stations on the market — is down to $799 from its regular $1,099 price. With 1,056Wh of capacity and 1,800W output, it can power most home appliances during outages.\n\nJackery's Explorer 2000 Plus is seeing even steeper discounts, dropping to $1,299 from $1,999. This beast offers 2,042Wh expandable capacity and can charge from zero to 80% in just 2 hours with AC charging.\n\nFor those with smaller budgets, Anker's SOLIX C300 is down to $179 — excellent for camping trips and small electronics.\n\nThese deals come as both companies compete aggressively for market share ahead of the summer outdoor season. Analysts predict the portable power station market will grow 23% this year as consumers increasingly seek backup power solutions amid grid reliability concerns.`,
//     imageUrl: 'https://images.unsplash.com/photo-1739742465631-7fc17a556344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN0YXRpb24lMjBwb3J0YWJsZSUyMGJhdHRlcnklMjBjaGFyZ2VyfGVufDF8fHx8MTc3MjU0MzMwNXww&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'The Verge',
//     author: 'Sheena Vasani',
//     publishedAt: 'Feb 23, 2026, 10:00 AM',
//     category: 'business',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.77,
//     emotions: { joy: 70, sadness: 0, anger: 0, fear: 0, surprise: 30 },
//     keywords: ['Anker', 'Jackery', 'Power Station', 'Sale', 'Discount', 'Battery'],
//     comments: [],
//   },
//   {
//     id: '7',
//     title: 'New Cybersecurity Vulnerability Discovered in Major Banking Systems',
//     description: 'Researchers have found a critical flaw affecting banking software used by over 500 financial institutions worldwide.',
//     content: `Security researchers at Mandiant have disclosed a critical vulnerability in a widely-used banking software platform that could allow attackers to access customer financial data without authentication.\n\nThe vulnerability, tracked as CVE-2026-11847, affects versions 8.x through 11.x of the CoreBanking Platform SDK, which is used by more than 500 financial institutions across 47 countries.\n\nThe flaw exists in the authentication token validation process and could be exploited remotely by unauthenticated attackers. Successful exploitation could lead to unauthorized access to customer account data, transaction histories, and in some cases, the ability to initiate fraudulent transfers.\n\nThe vendor, whose name is being withheld pending full patch deployment, was notified 90 days ago under responsible disclosure guidelines. A patch is now available, and financial institutions are being urged to apply it immediately.\n\n"The severity of this vulnerability cannot be overstated," said the lead researcher. "We've seen evidence that this flaw has already been exploited in the wild by at least two threat actor groups."\n\nCustomers of affected banks are advised to monitor their accounts closely and enable two-factor authentication if they haven't already.`,
//     imageUrl: 'https://images.unsplash.com/photo-1769092186388-06be4308162b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcyNTQzMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Krebs on Security',
//     author: 'Brian Krebs',
//     publishedAt: 'Mar 1, 2026, 08:45 AM',
//     category: 'technology',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'negative',
//     sentimentScore: -0.82,
//     emotions: { joy: 0, sadness: 20, anger: 30, fear: 60, surprise: 40 },
//     keywords: ['Cybersecurity', 'Vulnerability', 'Banking', 'CVE', 'Hacking', 'Finance'],
//     comments: [
//       { id: 'c6', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bobby', username: 'SecurityPro', text: 'This is deeply concerning. The 90-day disclosure window was appropriate, but banks need to patch IMMEDIATELY.', timestamp: '2h ago' },
//     ],
//   },
//   {
//     id: '8',
//     title: 'Tesla Unveils Next-Generation Electric Vehicle with 600-Mile Range',
//     description: 'The Tesla Model S Platinum Edition promises to revolutionize long-distance EV travel.',
//     content: `Tesla has officially unveiled the Model S Platinum Edition, an upgraded version of its flagship sedan that promises a class-leading 600-mile EPA-estimated range on a single charge — a milestone that would finally make range anxiety a thing of the past for most drivers.\n\nThe new model, which starts at $89,990, achieves its impressive range through a combination of a new 120 kWh battery pack using next-generation 4680 cells with improved chemistry, reduced drag (Cd 0.195), and more efficient dual motors.\n\nCEO Elon Musk unveiled the vehicle at a live event in Austin, Texas, calling it "the culmination of everything we've learned about electric vehicles over the past 15 years."\n\nThe Model S Platinum also features a redesigned interior with a 17-inch landscape display, a new yoke-plus steering wheel option, and Tesla's latest Full Self-Driving hardware with dedicated AI inference chips.\n\n0-60 mph in the Performance variant comes in at just 1.9 seconds, matching the Plaid variant for acceleration. Production is set to begin in Q3 2026, with deliveries expected in Q4.`,
//     imageUrl: 'https://images.unsplash.com/photo-1651688730796-151972ba8f87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBUZXNsYSUyMGNhcnxlbnwxfHx8fDE3NzI1NDMzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Electrek',
//     author: 'Fred Lambert',
//     publishedAt: 'Mar 2, 2026, 06:00 PM',
//     category: 'business',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.88,
//     emotions: { joy: 80, sadness: 0, anger: 0, fear: 5, surprise: 70 },
//     keywords: ['Tesla', 'EV', 'Electric Vehicle', 'Range', 'Model S', 'Battery'],
//     comments: [],
//   },
//   {
//     id: '9',
//     title: "NASA's Artemis Mission Reaches Critical Milestone on Path to Moon",
//     description: 'The Artemis IV crew has successfully completed their deep space training, clearing the way for a 2027 lunar surface mission.',
//     content: `NASA announced Thursday that the Artemis IV crew has successfully completed all required training milestones, putting the agency on track for a crewed lunar surface landing in late 2027 — the first time humans will set foot on the Moon since Apollo 17 in 1972.\n\nThe four-person crew — Commander Reid Wiseman, Pilot Victor Glover, Mission Specialist Christina Hammock Koch, and CSA astronaut Jeremy Hansen — completed an intensive 18-month training program at NASA's Johnson Space Center.\n\nThe training included simulated lunar surface operations, spacewalk practice in the Neutral Buoyancy Lab, SLS rocket abort procedures, and extensive geological sampling exercises.\n\n"We are ready," Commander Wiseman said at a press conference. "This crew has trained harder than any crew in history. We know this mission inside and out."\n\nThe Artemis IV mission will use the Space Launch System rocket to send the crew to lunar orbit, where they'll board the SpaceX Starship Human Landing System for the descent to the surface.\n\nNASA plans to spend up to 6 days on the lunar surface, collecting samples and deploying scientific instruments near the Moon's south pole, where water ice has been confirmed.`,
//     imageUrl: 'https://images.unsplash.com/photo-1614729375290-b2a429db839b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldCUyME5BU0ElMjBsYXVuY2h8ZW58MXx8fHwxNzcyNTQzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'NASA.gov',
//     author: 'Sarah Torres',
//     publishedAt: 'Feb 25, 2026, 03:00 PM',
//     category: 'science',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.91,
//     emotions: { joy: 90, sadness: 0, anger: 0, fear: 10, surprise: 60 },
//     keywords: ['NASA', 'Artemis', 'Moon', 'Astronaut', 'SpaceX', 'Lunar Landing'],
//     comments: [
//       { id: 'c7', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SpaceFan', username: 'SpaceNerd42', text: 'This is the most exciting moment in space exploration since... well, the last Artemis mission. Can\'t wait for 2027!', timestamp: '12h ago' },
//     ],
//   },
//   {
//     id: '10',
//     title: 'Bitcoin Surges Past $120,000 as Institutional Investors Pile In',
//     description: 'Bitcoin has reached a new all-time high as major financial institutions increase crypto exposure.',
//     content: `Bitcoin broke through the $120,000 barrier on Friday for the first time, driven by a surge in institutional investment following the SEC's approval of several new spot Bitcoin ETFs earlier this month.\n\nThe world's largest cryptocurrency reached an intraday high of $124,500 before settling around $121,000 by market close. The rally marks a 340% gain from Bitcoin's low of roughly $27,500 in early 2025.\n\nMajor financial institutions including BlackRock, Vanguard, and Fidelity have collectively accumulated over 1.2 million BTC through their spot ETF products since approval, equivalent to roughly $145 billion at current prices.\n\n"We're witnessing the institutionalization of Bitcoin in real-time," said Cathie Wood of ARK Invest. "This is not 2021. The infrastructure is more robust, the regulatory environment is clearer, and the demand is coming from long-term investors."\n\nSkeptics warn that the rapid price appreciation is unsustainable and point to Bitcoin's history of 50-80% corrections following major rallies. However, bulls argue that the structural demand from ETFs creates a floor that didn't exist in previous cycles.\n\nEthereum also saw gains, rising 18% to $8,200, while the broader crypto market added approximately $2.4 trillion in market capitalization this month alone.`,
//     imageUrl: 'https://images.unsplash.com/photo-1652337037919-62e284ff2839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBiaXRjb2luJTIwZmluYW5jZSUyMGJsb2NrY2hhaW58ZW58MXx8fHwxNzcyNTQzMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'CoinDesk',
//     author: 'Michael Martinez',
//     publishedAt: 'Mar 1, 2026, 05:00 PM',
//     category: 'business',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.79,
//     emotions: { joy: 75, sadness: 0, anger: 5, fear: 20, surprise: 65 },
//     keywords: ['Bitcoin', 'Crypto', 'ETF', 'Investment', 'Blockchain', 'Finance'],
//     comments: [],
//   },
//   {
//     id: '11',
//     title: 'AI-Powered Robots Transform Warehousing: 80,000 Jobs Impacted',
//     description: 'Amazon, Walmart, and Target are deploying next-gen robotic systems that dramatically reduce human staffing needs.',
//     content: `A new wave of AI-powered robotics is reshaping the logistics and warehousing industry, with major retailers deploying systems that can handle up to 85% of warehouse tasks without human intervention — a development that economists warn could displace as many as 80,000 workers in the United States alone by 2027.\n\nAmazon has announced the full deployment of its "Sequoia" robotic fulfillment system across 25 new facilities, while Walmart is rolling out its Symbotic-built robotic systems in all 42 of its regional distribution centers.\n\nThe robots can pick, sort, and pack orders with greater speed and accuracy than human workers, operating 24/7 without breaks. The systems use computer vision, machine learning, and advanced dexterous manipulation to handle a wider variety of products than previous generations.\n\nLabor unions are sounding the alarm. The United Food and Commercial Workers International Union has called for a "robot tax" to fund retraining programs for displaced workers.\n\n"We support innovation, but not at the expense of workers and communities," said UFCW President Marc Perrone. "Companies that profit from automation have a responsibility to the workers they're replacing."\n\nSome economists, however, see the transition as inevitable and potentially beneficial in the long run, arguing that new jobs will emerge in robot maintenance, programming, and supervision.`,
//     imageUrl: 'https://images.unsplash.com/photo-1752614671119-4868a91efc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGF1dG9tYXRpb24lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MjU0MzMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Reuters',
//     author: 'David Park',
//     publishedAt: 'Feb 26, 2026, 11:30 AM',
//     category: 'business',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'negative',
//     sentimentScore: -0.45,
//     emotions: { joy: 10, sadness: 40, anger: 35, fear: 50, surprise: 30 },
//     keywords: ['Robots', 'AI', 'Automation', 'Jobs', 'Amazon', 'Warehouse'],
//     comments: [],
//   },
//   {
//     id: '12',
//     title: 'Quantum Computing Breakthrough Could Revolutionize Drug Discovery',
//     description: 'Scientists have used quantum computers to simulate complex protein folding at unprecedented accuracy.',
//     content: `Researchers at IBM's Quantum Network and MIT have achieved a major breakthrough in quantum computing that could dramatically accelerate drug discovery: they've successfully used a 1,000+ qubit quantum computer to simulate the folding behavior of complex proteins with near-classical simulation accuracy, but at a fraction of the time and energy cost.\n\nThe research, published in Nature today, demonstrates that quantum computers can now handle molecular simulation tasks that would take traditional supercomputers years to complete — and the results are more accurate.\n\n"This is the moment we've been working toward for decades," said Dr. Sarah Chen, lead author of the paper. "We can now simulate how potential drug molecules interact with disease-causing proteins in a way that was simply impossible before."\n\nThe immediate application is in fighting antibiotic-resistant bacteria. The team used the quantum system to identify three promising antibiotic candidates that could potentially combat MRSA, which kills approximately 35,000 people in the US annually.\n\nIndustry analysts say this breakthrough could cut drug development timelines from the current 10-15 years to as few as 3-5 years, potentially saving hundreds of thousands of lives and billions in development costs.`,
//     imageUrl: 'https://images.unsplash.com/photo-1686195165991-74af7c2918d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwcHJvY2Vzc29yJTIwY2hpcHxlbnwxfHx8fDE3NzI1NDMzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'Nature',
//     author: 'Dr. Emily Watson',
//     publishedAt: 'Mar 3, 2026, 09:00 AM',
//     category: 'science',
//     country: 'United States',
//     countryCode: 'us',
//     sentiment: 'positive',
//     sentimentScore: 0.85,
//     emotions: { joy: 80, sadness: 0, anger: 0, fear: 5, surprise: 75 },
//     keywords: ['Quantum Computing', 'IBM', 'Drug Discovery', 'Protein Folding', 'Antibiotics', 'Science'],
//     comments: [],
//   },
//   {
//     id: '13',
//     title: 'Global Climate Summit Produces Historic Carbon Reduction Agreement',
//     description: '195 nations sign landmark treaty committing to net-zero emissions by 2040.',
//     content: `In a historic conclusion to the COP 32 climate conference in Jakarta, 195 nations have signed the Jakarta Climate Accord — the most ambitious international climate agreement ever reached, committing signatories to achieving net-zero carbon emissions by 2040, a decade ahead of previous targets.\n\nThe agreement, finalized after 14 days of intense negotiations, includes binding mechanisms for enforcement, a $500 billion annual climate fund for developing nations, and unprecedented technology-sharing provisions that will give developing countries access to clean energy technologies at no cost.\n\nUS Climate Envoy John Podesta called it "the most consequential agreement in human history," while EU Commission President Ursula von der Leyen said it represented "humanity choosing its future."\n\nThe accord requires all signatory nations to submit detailed decarbonization plans within 18 months and submit to independent verification of their emissions data — a sticking point that had derailed previous negotiations.\n\nChina and India, historically resistant to binding commitments, signed after receiving significant concessions on technology access and transition timelines. Both countries will have until 2042 to reach net-zero, with rigorous interim targets.`,
//     imageUrl: 'https://images.unsplash.com/photo-1642229407991-e28d009cb968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb1NEJTIwbWVtb3J5JTIwY2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTQzMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
//     source: 'BBC News',
//     author: 'James Randerson',
//     publishedAt: 'Mar 2, 2026, 11:00 PM',
//     category: 'general',
//     country: 'Indonesia',
//     countryCode: 'id',
//     sentiment: 'positive',
//     sentimentScore: 0.76,
//     emotions: { joy: 70, sadness: 5, anger: 5, fear: 10, surprise: 50 },
//     keywords: ['Climate', 'COP32', 'Carbon', 'Environment', 'Treaty', 'Net-Zero'],
//     comments: [],
//   },
// ];

// // Generate additional mock articles to reach 20 total
// const EXTRA_ARTICLES: Article[] = Array.from({ length: 7 }, (_, i) => ({
//   ...ARTICLES[i % ARTICLES.length],
//   id: `extra-${i + 14}`,
//   title: `${ARTICLES[i % ARTICLES.length].title} — Follow-up Report`,
//   publishedAt: 'Mar 3, 2026, 01:00 PM',
// }));

// export const ALL_ARTICLES = [...ARTICLES, ...EXTRA_ARTICLES];
// export const TOP_HEADLINES = ARTICLES.slice(0, 5);
// export const COUNTRIES = [
//   { code: 'us', name: 'United States' },
//   { code: 'id', name: 'Indonesia' },
//   { code: 'gb', name: 'United Kingdom' },
//   { code: 'au', name: 'Australia' },
//   { code: 'jp', name: 'Japan' },
//   { code: 'cn', name: 'China' },
//   { code: 'de', name: 'Germany' },
//   { code: 'fr', name: 'France' },
//   { code: 'in', name: 'India' },
//   { code: 'br', name: 'Brazil' },
// ];
// export const CATEGORIES: Category[] = ['technology', 'business', 'science', 'health', 'entertainment', 'sports', 'general'];
