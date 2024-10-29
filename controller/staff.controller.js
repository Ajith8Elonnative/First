import staff from "../models/staff.model.js"

export const staffGetall = async (req, res) => {
    try {
        const Staff = await staff.find()
        res.status(200).json(Staff)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const staffRegister = async (req, res) => {

    if (req.body._id) {
        try {
            const updateStaff = await staff.findOneAndUpdate({ _id: req.body._id },
                {
                    companyName: req.body.companyName,
                    empName: req.body.empName,
                    empId: req.body.empId,
                    email: req.body.email,
                    phoneNo: req.body.phoneNo,
                    role: req.body.role,
                    salary: req.body.salary
                },{
                    new:true
                }
            )
            console.log('update')
            res.status(200).json(updateStaff)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    } else {
        const newstaff = new staff({
            companyName: req.body.companyName,
            empName: req.body.empName,
            empId: req.body.empId,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            role: req.body.role,
            salary: req.body.salary
        })
        try {
            const Staff = await newstaff.save()
            return res.status(201).json(Staff)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}


export const staffDetail = async (req, res) => {
    try {
        const movie = await staff.findById(req.params.id)
        if (movie == null) {
            res.status(404).json({ message: "could not find movie or no movie" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const staffUpdate = async (req, res) => {
    try {
        const updateStaff = await staff.findOneAndUpdate({ _id: req.params.id },
            {
                companyName: req.body.companyName,
                empName: req.body.empName,
                empId: req.body.empId,
                email: req.body.email,
                phoneNo: req.body.phoneNo,
                role: req.body.role,
                salary: req.body.salary
            },
            {
                new: true
            }
        )
        res.status(200).json(updateStaff)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const staffDelete = async (req, res) => {
    const staffId = req.params.id
    try {
        console.log(staff.name)
        await staff.findByIdAndDelete({ _id: staffId })
        res.json({ message: `successful deleted ${staff.name}` })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}





{/* 
export const staffRegister = async (req, res) => {
    // Check if the request has an `id` in the URL params
    if (req.params.id) {
        // Update the staff record if `req.params.id` matches `req.body._id`
        if (req.params.id === req.body._id) {
            try {
                const updatedStaff = await Staff.findOneAndUpdate(
                    { _id: req.params.id },
                    {
                        companyName: req.body.companyName,
                        empName: req.body.empName,
                        empId: req.body.empId,
                        email: req.body.email,
                        phoneNo: req.body.phoneNo,
                        role: req.body.role,
                        salary: req.body.salary
                    },
                    { new: true }
                );

                if (!updatedStaff) {
                    return res.status(404).json({ message: 'Staff not found' });
                }

                res.status(200).json(updatedStaff);
            } catch (error) {
                res.status(400).json({ message: `Update failed: ${error.message}` });
            }
        } else {
            res.status(400).json({ message: 'ID mismatch between params and body' });
        }
    } else {
        // Create a new staff record if no `id` is provided in the URL params
        const newStaff = new Staff({
            companyName: req.body.companyName,
            empName: req.body.empName,
            empId: req.body.empId,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            role: req.body.role,
            salary: req.body.salary
        });

        try {
            const savedStaff = await newStaff.save();
            res.status(201).json(savedStaff);
        } catch (error) {
            res.status(400).json({ message: `Creation failed: ${error.message}` });
        }
    }
};
*/}