module.exports=(sequelize,DataTypes)=>{
    const department = sequelize.define("department",{
     departmentName:{
        type:DataTypes.STRING,
        required:true
     },
     departmentCode:{
        type:DataTypes.STRING,
        required:true
     }
    })
    return department
}