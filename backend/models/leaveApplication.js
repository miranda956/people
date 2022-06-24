module.exports=(sequelize,DataTypes)=>{
    const LeaveApplication = sequelize.define("LeaveApplication",{
    referenceNumber:{
        type:DataTypes.STRING,
        required:true
    },
    DateOfApplication:{
        type:DataTypes.DATE,
        required:true
    },
    attachments:{
        type:DataTypes.STRING,
        required:true
    },
    leaveStatus:{
        type:DataTypes.ENUM("pending","accepted","rejected"),
        required:true,
        default:"pending"
    },
    remarks:{
        type:DataTypes.STRING,
        required:true
    },
    dateOfApproval:{
        type:DataTypes.DATE,
        required:true
    },


    })
    return LeaveApplication
}