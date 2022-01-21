import axios from 'axios'
import Project from '../../../models/app/Project.js'
import User from '../../../models/user/auth/User.model.js'


export const sendEmails = async (req,res) => {
  const {subject, content, projectId} = req.body;

  let recipients = [];
  let result = ''

  try {
    const project = await Project.find({id:projectId})
    const assignees = await project[0].assignees
    await assignees.forEach((item, i) => {
      recipients.push(item.userEmail)
    });
    await axios
      .post(`${process.env.MESSAGE_SERVER}/email`,{subject,email:recipients,content})
      .then((res)=>result=res.data);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e.message);
  }
}
