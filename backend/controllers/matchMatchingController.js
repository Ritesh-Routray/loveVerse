import User from "../models/user/user"

export const matchMatching = async (req, res) => {
    const {selftrait, selfcategory, selfdescription, selfweight, desiredtrait, desiredcategory, desireddescription, desiredweight} = req.body;

    if(!selftrait || !selfcategory || !selfdescription || !selfweight) {
        return res.status(400).json({message: "All fields are required"});
    }

    try {
        const user = await User.findById(req.user._id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        user.selfQualities.push({
            trait: selftrait,
            category: selfcategory,
            description: selfdescription,
            weight: selfweight
        });

        user.partnerQualities.push({
            trait: desiredtrait,
            category: desiredcategory,
            description: desireddescription,
            weight: desiredweight
        });

        await user.save();
        res.status(201).json({message: "Qualities added successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"});
    }

    

}