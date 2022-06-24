module.exports=(sequelize,DataTypes)=>{
    const designation =sequelize.define("designation",{

     desgnationName:{
        type:DataTypes.STRING,
        required:true
     },
     designationDescription:{
        type:DataTypes.STRING,
        required:true
     }

    })
    return designation
}