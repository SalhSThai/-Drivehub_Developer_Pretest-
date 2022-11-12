import React from 'react'
import styled from 'styled-components';

export default function Navbar() {

  const Navbar = styled.div`
  background-image: url('https://www.drivehub.co/static/c1c0c1dc5f9766d69a857ef16136e5d5/1f5b5/new-homepage-bg.webp');
  color: rgb(255 255 255);

`;
  return (
    <Navbar className='w-full h-[150px]  flex flex-col bg-cover bg-center '>
      <div className='w-full h-full bg-[rgba(14,12,39,0.6)]'>
        <div className=' w-full h-[50%] flex justify-start items-center  px-10'>
          <div className=' h-full w-[200px] bg-cover  flex flex-col justify-center items-center gap-3' style={{backgroundImage:`url(https://res.cloudinary.com/klothcloud/image/upload/v1668223422/DriveHub/driveHub_xdc2aa.png)`}}>
          </div>
          <div className=' grow h-full flex justify-end items-center gap-[20px] '>
            <h3 className=''>เช่ารถกับ Drivehub</h3>
            <h3 className=''>ความช่วยเหลือ</h3>
            <h3 className=''>สมัครสมาชิก/ลงชื่อเข้าใช้</h3>

            <h3 className='text-xl'>| @drivehub 02-038-5222</h3>
          </div>
        </div>
        <div className='w-full h-[50%] bg-[rgba(0,0,0,0.5)] flex justify-center items-center gap-[50px]'>
          <h3 className=''>รับประกันราคาถูก</h3>
          <h3 className=''>การันตีราคาเดียวกับหน้าร้าน 100%</h3>
          <h3 className=''>จองฟรี และ ชำระค่าเช่า ณ วันรับรถ</h3>
          <h3 className=''>ไม่มีบัตรเครดิตก็เช่าได้</h3>

        </div>
      </div>
    </Navbar>
  )
}
