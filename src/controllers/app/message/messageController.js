import axios from 'axios'
import Project from '../../../models/app/Project.js'
import User from '../../../models/user/auth/User.model.js'


export const sendEmails = async (req,res) => {
  const {subject, content, projectId} = req.body;

  let recipients = [];

  try {
    const project = await Project.find({id:projectId})
    const assignees = await project[0].assignees
    await assignees.forEach((item, i) => {
      recipients.push(item.userEmail)
    });    
    await axios.post('https://infinite-cliffs-84448.herokuapp.com/email',{subject,recipients,content})
    return res.status(200).json(recipients);
  } catch (e) {
    return res.status(500).json(e.message);
  }
}
