const connection = require('../connection/FoundBallConnection');
const Format = require('../tools/format');

module.exports.getPemain = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let foundball = await connection.getPemain(req.query);

            if(!foundball.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            foundball = foundball.bindings.map((pemain)=>Format(pemain));

            if(req.params.id){
                let pemain = foundball.filter((pemain)=>{
                    return pemain.id == req.params.id
                });
                res.status(200).json({
                    data:pemain[0],
                    message: pemain.length ? 'Data pemain berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: foundball,
                    message: "Show all Data pemain"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }

    module.exports.getSearch = async(req, res)=>{
        try{
            let inputs = req.query.search.split(" ");
            let outputs = []
            // Query data dari connection
            await Promise.all(
                inputs.map(async (input)=>{
                    let foundball = await connection.getSearch({search: input});
                foundball  = foundball.bindings.map((pemain)=>Format(pemain));
                    foundball.map(async (pemain)=>{
                        const find = outputs.find(({id})=> id === pemain.id)
                        if(!find){
                            outputs.push(pemain);
                        }
                    })
                })
            )
            if(!outputs.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }else{
                res.status(200).json({
                    data: outputs,
                    message: "Show all games"
                })
            }
            
        }catch(err){
            res.status(400).json(err);
        }
    }
    module.exports.getSuggestion = async(req, res)=>{
        try{
            // Query data dari connection
            let foundball = await connection.getSuggestion(req.query);
    
            if(!foundball.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }
    
            foundball = foundball.bindings.map((pemain)=>Format(pemain));
            res.status(200).json({
                data: foundball,
                message: "Show all games"
            })
    
        }catch(err){
            res.status(400).json(err);
        }
    }