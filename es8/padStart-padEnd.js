const professions = ['Web Designer', 'DBA', 'Full Stack Developer', 'Engineer', 'Artist', 'Soccer Player', 'Pilot', 'Plumber', 'Brick Layer'];

//The second parameter of bouth cases are used for fill the space given
//Gives a padding at the beggining of the string according to the value passed.
professions.forEach(profession => console.log(profession.padStart(25,'-')))

//padding end does the opposite.
professions.forEach(profession => console.log('padEnd Here: '.padEnd(45,'-') + profession))