module.exports=(sequelize,DataTypes)=>{
const FeatureAcess = sequelize.define("FeatureAccess",{
   accessDepartment:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessEmployee:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessLeaves:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessLeaveApplication:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessUser:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessPayroll:{
    type:DataTypes.BOOLEAN,
    required:true
   },
   accessDesignation:{
    type:DataTypes.BOOLEAN,
    required:true
   }

    })
    return FeatureAcess
}