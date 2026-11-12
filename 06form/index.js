const teamQuotes = {
    "Royal Nation": ['"I have witnessed executions of families and the necks of children contorted beyond human, this is reason enough to fight." - Sergeant Major Thomas (1889 - 1920)', '"Every day this war drags on, I only wish it would end faster, but these Empire cultists would pray to see it longer." - Sergeant Bessie (1895 - 1921)', '"Always look forward to brighter future built on unity and prosperity, not blind fanaticism of a single ruler." - Sergeant Major Roy (1890 - 1922)', '"Every life lost under the dirt will always be remembered, do not let their souls be in vain when faced with the Empire."- Lieutenant Lawrence (1890 - 1922)', '"Do not let the faces of these angels fool you, because they are a mere facade of the devil that they claim is us."- Sergeant Claude (1891 - 1921)', '"Evil they call us, but I have never seen such brutality from men who claim to follow the word of God and justice."- Corporal Rosa (1899 - 1923)', '"We fight for a better future, the Golden Empire fights to purge and cleanse anyone they deem a heretic, even their own."- Corporal Dalila (1892 - 1921)', '"They caused this war and now they want to blame us for prolonging it—like we all should just roll over and die—to hell with that."- Lieutenant Smith (1884 - 1920)', '"I fight because my family deserves better, they deserve a life of peace un-burdened by the eyes of lunatic book-worshippers."- Sergeant Glen (1890 - 1921)', '"They have long since forsaken the God they claim to serve, their blood stained with maniacal, corrupted zealotry."- Lieutenant Geneva (1883 - 1921)', '"I saw a man who took seven rifle rounds continue towards us, sword in hand.. that is when I knew we were fighting demons."- Corporal Joe (1895 - 1921)', '"The faith the Empire preaches is merely a lure to drag men and women to the deepest depths of anguish and agony."- Sergeant Eugene (1885 - 1919)', '"If just for a moment, whenever I take a life... the whispers silence themselves under the beating of my heart."- Corporal Elvira (1892 - 1923)', '"If a thousand must be sacrificed to save ten thousand, then so be it. I would gladly give my life to save ten others."- Lieutenant Sylvester (1883 - 1921)', '"It only took my brother 2 months to kick the bucket during his service. How long do you think I’ll make it?"- Private First Class Jonathan (1900 - 1921)', '"For honor and glory. Not to the false ideals the Empire propagates, but to the country I pledged my life to."- Sergeant Perry (1899 - 1922)'
    ],
    "Golden Empire": [
        '"The Empire is the sword, our loyalty is the shield and we will see a future without evil and tyranny."- Inquisitor Ottilie (1890 - 1920)',
        '"Corruption is the path of the Royal Nation whom their kings cling to—but under the Golden Empire—we will always be kindred spirits."- Inquisitor Elsbeth (1886 - 1920)',
        '"My father wanted to change the lives for the better but avarice of the Kings deludes even the brightest of minds."- Armsman Julius (1900 - 1922)',
        '"We have naught but faith in these tunnels, yet despite that, it shines brighter than any lantern of the abhorrent Nation."- Knight Commander Ferdinand (1889 - 1921)',
        '"Pity and shame it is that we can serve in the Golden Empire but once in our lifetime."- Grand Knight Eugen (1901 - 1923)',
        '"The Royal Nation is pestilence, a plague to a beautiful future and I bear nothing but contempt to these dogs."- Grand Knight Leonard (1888 - 1922)',
        '"The day their dogs tore apart my innocent brother for the crimes of a fat King, I can never forgive ever again."- Squire Edwin (1899 - 1923)',
        '"I wish for a life where souls were valued for more than coin, fame and selfish desires to trample those beneath you."- Squire Alwin (1902 - 1922)',
        '"I dream to see the sky again, and bask in the light of our sun, but not in a world stained by the fear of the Royal Nation."- Knight Allochka (1896 - 1921)',
        '"They want to rule with fear, corruption and greed, then so be it—we will fight with vengeance, fury and judgement."- Knight Phyllis (1895 - 1923)',
        '"A battlefield is no better than hell itself. That is why, to expunge this hell from Earth, we must fight with all our heart."- Grand Knight Beckford (1890 - 1920)',
        '"The Nation dogs will devour each other under the pretense of freedom. Unity is the only way to repair this broken world."- Inquisitor Gennadiya (1887 - 1922)',
        '"A pity that they continue to be repelled by the blinding, unfaltering light of the Empire. Pride is the worst of all sins, after all."- Knight Harry (1897 - 1922)',
        '"Staring into the blood pooling beneath me, I remembered the twinkling of the stars overhead when I was a child."- Armsman Elizabeth (1901 - 1923)',
        '"All the lives we have sacrificed shant be in vain. We will see to it that everything they stood for is avenged."- Knight Commander Anni (1890 - 1922)',
        '"Their bombs destroyed the world... my world. I won’t let those devils take everything I worked to build away from me again."- Knight Werner (1898 - 1923)',
        '"From its very roots, the Nation is a plague. They merely destroy, while we have the ability to create and rebuild."- Armsman Helen (1899 - 1920)'
    ]
};
const teams = Object.keys(teamQuotes);
const selectedTeam = teams[Math.floor(Math.random() * teams.length)];
const selectedQuotes = teamQuotes[selectedTeam];
const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
const quoteElement = document.getElementById("random-quote");
quoteElement.textContent = randomQuote;
const teamClass = selectedTeam === 'Royal Nation' ? 'royal-nation' : 'golden-empire';
document.body.classList.add(teamClass);