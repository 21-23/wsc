const players = [
    'Eric Hoffman',
    'Chelsea Otakan',
    'James Anderson',
    'Kerri Pangburn',
    'Karie Averette',
    'Dee Urbanek',
    'Rolf Journey',
    'Dewey Routh',
    'Toshia Starr',
    'Phil Rios',
    'Jere Vosburg',
    'Cherry Mcelroy',
    'Shane Moises',
    'Tempie Lytle',
    'Nicolas Thornhill',
    'Fatimah Maughan',
    'Deonna Beaudin',
    'Veronica Pinkston',
    'Arthur Delima',
    'Marquita Fargo',
    'Milo Feucht',
    'Joesph Trudel',
    'Jammie Haines',
    'Dianne Hebron',
    'Gerda Ardis',
    'Nana Kuehner',
    'Windy Fiedler',
    'Natividad Mccook',
    'Madison Rennie',
    'Vivian Olszewski',
    'Asa Gebhardt',
    'Jayne Mele',
    'Conchita Custis',
    'Argentina Karlin',
    'Rozanne Cambre',
    'Ngan Scroggs',
    'Ellsworth Rundell',
    'Kristin Huseman',
    'Altha Hug',
    'Shala Burkley',
    'Keely Ishibashi',
    'Mabelle Riney',
    'Ardis Couvillion',
    'Mimi Hartsoe',
    'Raleigh Clausen',
    'Yadira Eisner'
];

export default function generate() {
    const playersMap = {};
    
    for (let i = 0; i < players.length; i++) {
        const playerId = i;

        playersMap[playerId] = {};
        playersMap[playerId].progress = Math.floor(Math.random() * 4);
        playersMap[playerId].name = players[i];
        playersMap[playerId].id = playerId;
        playersMap[playerId].progressTime = Date.now() + i;
    }
    return playersMap;
}
