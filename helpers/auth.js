module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Bro, pls come in or Enter the Club to maintain ur i-diez');
        res.redirect('/users/login');
    }
};