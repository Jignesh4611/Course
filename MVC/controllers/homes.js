const registeredHomes=[];

exports.getAddHome  = (req, res, next) => {
  res.render('addhome', { 
    pageTitle: 'Registration',
    headerTitle: 'Add your detail'
  });
}
exports.postAddHomes =  (req, res, next) => {
  console.log('Home Registration successful for : ' ,req.body, req.body.houseName);
  registeredHomes.push({houseName : req.body.houseName}) ;
  console.log(req.body.houseName );
    res.sendFile(path.join(rootDir,'views', 'homeadded.html'))


  }
exports.getHomes=  (req, res, next) => {
    res.render('home',{registeredHomes : registeredHomes , pageTitle : 'airbnb homes'})
}

