/*   STEP 1   */
export const leagueID = "1312102832085671936"; // your league ID
export const leagueName = "Lords of the Living Room"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome, brave souls, to the Lords of the Living Room Dynasty League - a league where legends are forged from couches, trophies are won in sweatpants, and power is measured by waiver-wire wizardry and questionable trade logic.</p>
  <p>This league is ruled not by kings or emperors, but by Lords - strategists, schemers, and lifelong grudgeholders who gather year after year to prove their dominance in the most sacred arena of all: the living room. Here, rebuilding takes patience, championships are immortalized, and bad draft pick will remain forever.</p>
  <p>Dynasties rise and fall, trash talk echoes endlessly. The rules are firm, the rivalries are fierce, and the group chat is never silent. Whether you are chasing glory, clinging to success, or convincing others that this is your year...know this:</p>
  <p>Once you enter this living room, you will never leave.</p>
  <p>May your picks hit, your players stay healthy, and your couch forever feel like a throne.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "459076428353236992",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Lucas Wencl",
      "location": "Twin Cities", // (optional)
      "bio": "Lucas is a founding member of the Fantasy Football Fellas podcast who enters every season with that same \"trust me, I've watched the tape\" mentality. His dynasty strategy is accompanied by a long explanation of why he was actually right all along. Win or lose, Lucas is never wrong - he's just early.",
      "photo": "/managers/Lucas.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Josh", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Josh.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Never wrong, just early."
    },
    {
      "managerID": "656656370883448832",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tyler Plath",
      "location": "Twin Cities", // (optional)
      "bio": "Tyler is another founding member of the Fellas, he shows up, sets his lineup, and finds himself in the playoffs. Less talk, more results until he hits you with a stink face to remind you how he feels about your team. Never flashy, always steady, and dangerous if you forget about him.",
      "photo": "/managers/Ty.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cam", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Cam.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Less talk, more results."
    },
    {
      "managerID": "703266307541389312",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Cameron Lawrence",
      "location": "Twin Cities", // (optional)
      "bio": "The loudest member of the Fellas, Cam enters every season already talking like it's over - and annoyingly, the standings tend to agree. His trash talk is loud, nonstop, and delivered with the kind of confidence you only earn by winning early and often. By the time anyone thinks to doubt him, he's already moved on to reminding you why you should've known better.",
      "photo": "/managers/Cam.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kevin", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Kev.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Talk big, win often."
    },
    {
      "managerID": "706608625463947264",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kevin Vieira",
      "location": "Twin Cities", // (optional)
      "bio": "The league commish who governs the living room from the throne, enforcing  order with an unshakable presence and just enough menace to keep chaos at bay. Everything runs calm, calculated, and impeccably professional - not because it has to, but because it bends to his will. When the standings are final, it's no surprise he stands above the rest.",
      "photo": "/managers/Kev.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cam", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Cam.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Control is established, outcomes are inevitable."
    },
    {
      "managerID": "715072573137838080",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bryson Einerson",
      "location": "Denver", // (optional)
      "bio": "The lone Packer fan, Bryson carries decades of tradition, confidence, and unshaken optimism into every season. Win or loss, he drafts, trades, and debates with the quiet certainty of someone who trusts the process - and the history - more than the noise. Loyalty first, patience always, and a belief that things tend to work out...especially for him.",
      "photo": "/managers/Bryson.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ben", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Ben.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Others hope, history assures."
    },
    {
      "managerID": "36259514256445440",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Josh Betterman",
      "location": "Twin Cities", // (optional)
      "bio": "Josh enters the league with a name that doubles as both a promise and a warning - because he fully expects to be better than the rest. He plays with unwavering confidence, assuming the smarter move will reveal itself to him naturally, as if improvement is simply part of who he is. When the dust settles, Josh isn't just chasing wins - he's proving that some men are simply better.",
      "photo": "/managers/Josh.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Lucas", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Lucas.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "It's not arrogance when you're just better."
    },
    {
      "managerID": "987399674455810048",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kyle Gruber",
      "location": "San Diego", // (optional)
      "bio": "Kyle is the only Bears fan, radiating confidence forged through grit, perseverance, and an elite tan that never fades. A tough mudder finisher with main character energy, he is battle tested, self assured, and aware that the camera usually finds him - often with company. He plays to win with swagger and certainty",
      "photo": "/managers/Kyle.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "McKinley", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Kinels.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Outwork, win, and look good."
    },
    {
      "managerID": "990431317856727040",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ben Twite",
      "location": "Twin Cities", // (optional)
      "bio": "A tall, blonde, mustachioed embodiment of Minnesota sports fandom, carrying confidence fueled by loyalty, suffering, and unwavering belief. Every season is approached like destiny owes him. Thick-skinned and unshakable, Ben plays with the calm assurance that success isn't coming - it's expected.",
      "photo": "/managers/Ben.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Bryson", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Bryson.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Confidence isn't loud when it's certain."
    },
    {
      "managerID": "1073007208448753664",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Phil Unseth",
      "location": "Twin Cities", // (optional)
      "bio": "Phil is the loudest, biggest presence in the room - impossible to ignore, impossible to forget, and absolutely on his own volume setting. Obnoxious at first glance but undeniably funny, he plays the league the same way he enters a conversation: full force and unapologetic. You don't get used to Phil - he makes sure you adapt",
      "photo": "/managers/Phil.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kevin", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Kev.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Dominate the space and endure the chaos."
    },
        {
      "managerID": "1131320910859902976",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "McKinley Beane",
      "location": "Stillwater Area", // (optional)
      "bio": "This local farm boy may be new to fantasy football, but he arrived with the calm confidence of someone who's been running operations long before he ever set a lineup. He treats dynasty like his tractors, with steady hands, no wasted motion, and an instinct for when to push the throttle. Still learning, already winning - McKinley moves methodically and with an instinct for systems that are built to last.",
      "photo": "/managers/Kinels.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kyle", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Kyle.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "philosophy": "Built to last, unstoppable in motion."
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
