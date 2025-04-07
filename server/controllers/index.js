const example1 = (req, res) => {
  res.render('example1');
};

const example2 = (req, res) => {
  res.render('example2');
};

const example3 = (req, res) => {
  res.render('example3');
};

const getSongs = (req, res) => {
  const songs = {
    'Sabrina Carpenter': ['Please Please Please', 'Nonsense', 'Espresso'],
    'Chloe Moriondo': ['Bugbear', 'Manta Rays', 'Spirit Orb'],
    'The Crane Wives': ['The Moon Will Sing', 'Never Love an Anchor', 'Curses']
  };

  setTimeout(300);

  res.json(songs);
};

module.exports.example1 = example1;
module.exports.example2 = example2;
module.exports.example3 = example3;
module.exports.getSongs = getSongs;
