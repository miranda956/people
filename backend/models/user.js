module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
     
        email:{
            type:DataTypes.STRING,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true
        },
        avatar:{
            type:DataTypes.STRING,
            required:true
        },
        fullname:{
            type:DataTypes.STRING,
            required:true
        },
        contact:{
            type:DataTypes.INTEGER,
            required:true
        },
        status:{
            type:DataTypes.BOOLEAN,
            required:true

        },
        username:{
            type:DataTypes.STRING,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true
        }

    })
    return User;
}