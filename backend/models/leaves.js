module.exports=(sequelize,DataTypes)=>{
    const Leaves = sequelize.define("Leaves",{
    leaveType:{
        type:DataTypes.STRING,
        required:true
    },
    LeaveDuration:{
        type:DataTypes.INTEGER,
        required:true
    },
    comment:{
        type:DataTypes.STRING,
        required:true
    }


    })
    return Leaves
}