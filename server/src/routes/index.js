const {PrismaClient} = require('@prisma/client')



const prisma = new PrismaClient()



async function main(){
    //A ver si funca, crear un registro
    const post = await prisma.User.create({
        data:{
           name : 'pepe',
           email: 'santi'
        }
    })
    console.log(post)

}
//Permite catchear el errror en caso de que exista, y una vez finalizado corta prisma,no mantiene la conexion abierta
main()
    .catch((e)=>{
        console.log(e)
    })
    .finally(async ()=> {
        await prisma.$disconnect()
    })
// const route = express.Router()


// route.get('/',(rec,res)=>{
//     res.send('funciona')
// })


// route.post('/',(rec,res)=>{

//     prisma.cancha.create
//     res.send('funciona')
// })
// module.exports = route



