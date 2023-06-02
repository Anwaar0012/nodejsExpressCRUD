import StudentModel from "../models/Student.js";
class StudentController{

    static createDoc =async(req,res)=>{
        // console.log("create post method");
        // console.log(req.body.name)
        try {
            const {name,age,fees}=req.body;
            const doc=new StudentModel({
                name:name,
                age:age,
                fees:fees

            });
            // saving document
            const result = await doc.save();
            // console.log("data saved",result);
            res.redirect('/student');
            
        } catch (error) {
            console.log(error);
        }
    }


    static getAllDoc =async(req,res)=>{
        try {
            const result = await StudentModel.find();
            // console.log(result);
            res.render('index',{data:result});
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc =async(req,res)=>{
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id);
            // console.log(result);
            res.render('edit',{data:result});
        } catch (error) {
            console.log(error);
            
        }

    }

    static updateDocById =async(req,res)=>{
        // received id from uls 
        // console.log(req.params.id);
        // received form data 
        // console.log(req.body);
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect('/student');

    }

    static deleteDocById =async(req,res)=>{
        console.log(req.params.id);
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id);

        } catch (error) {
            console.log(error);
            
        }
        res.redirect('/student');
    }
}
export default StudentController