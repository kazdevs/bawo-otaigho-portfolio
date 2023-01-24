import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineDribbble } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'

const data = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/bawo-otaigho-b49a69167/',
    icon: <GrLinkedinOption />,
  },
  {
    id: 2,
    link: 'https://www.behance.net/bawootaigho',
    icon: <BsBehance />,
  },
  { id: 3, link: 'https://dribbble.com/OBex', icon: <AiOutlineDribbble /> },
  {
    id: 4,
    link: 'https://www.instagram.com/uidesign3r/',
    icon: <AiOutlineInstagram />,
  },
  {
    id: 5,
    link: 'otaighobawo@gmail.com',
    icon: <MdEmail />,
  },
]

export default data
