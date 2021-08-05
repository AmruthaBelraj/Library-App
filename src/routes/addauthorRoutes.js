const express = require("express");

const addauthorRouter = express.Router();

function router(nav)

{

    addauthorRouter.get('/',function(req,res) 

{

    res.render("addauthor",{nav,

    title:'ADD AUTHOR PAGE',

    head:'Add Author',

    button:'ADD'

}); 

});


    return addauthorRouter;
}

module.exports = router; 