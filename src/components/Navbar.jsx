import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/cryptocurrency.png'
const items=[
  {
    label:(<Link to='/homepage'>Home</Link>),
    key:'1',
    icon:<HomeOutlined/>
  },
  {
    label:(<Link to='/cryptocurrencies'>Cryptocurrencies</Link>),
    key:'2',
    icon:<FundOutlined/>
  },
  {
    label:(<Link to='/news'>News</Link>),
    key:'3',
    icon:<BulbOutlined/>
  }
]
const Navbar = () => {
  const [activeMenu,setActiveMenu] = useState(true)
  const[screenSize,setScreenSize]= useState(null)
  useEffect(() => {
    const handleResize=()=>setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>window.removeEventListener('resize',handleResize)
  }, [])

  useEffect(()=>{
    if(screenSize<768){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  },[screenSize])
  
  return (
    <div className='nav-container '>
        <div className='logo-container'>
            <Avatar src={icon} size='large' alt='no image'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/homepage' >Cryptoverse</Link>
            </Typography.Title>
             <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
              <MenuOutlined/>
              </Button> 
        </div>
        {activeMenu && (
          <Menu mode='inline' items={items} defaultSelectedKeys={['1']} theme='dark'/>)}
         
        
         
    </div>
  )
}

export default Navbar