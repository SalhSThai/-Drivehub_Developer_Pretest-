import styled from "styled-components"

function Footer() {
    const Footer = styled.div`
    color: white;
    `
    return (<Footer>
        <div className='w-screen h-fit bg-[#30374b] mt-10 px-[100px] flex flex-col p-2'>
            <div className=" bottom-0 grid grid-cols-6 h-auto  w-11/12 " id="contact">
                <div className=" flex flex-col justify-center mx-5  col-span-2">
                    <h1>
                        <hr className=" " />
                    </h1>
                    <p>Drivehub Co.,Ltd
                    </p>
                    <p>193-195 Lake Rajada Office Complex,Ratchadapisek road, Khlong Toei, Bangkok
                    </p>
                    <p>info@mysite.com</p>

                    <p>© 2023 by Personal Life Coach.</p>

                </div>
                <div className=" col-span-1 flex flex-col items-center gap-5 ">
                        ติดต่อเรา
                    <div className="flex w-full justify-center gap-5">
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-instagram" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-youtube" />
                    </div>
                </div>
                <div className=" col-span-1 flex justify-center ">
                    เกี่ยวกับ Drivehub <br />
                    บริการของเรา <br />
                    ประเภทรถเช่า <br />
                    บล็อก <br />
                    ติดต่อ <br />
                    ร่วมเป็นพันธมิตรกับเรา <br />
                </div>
                <div className='col-span-1 flex justify-center'>
                    บริการของ Drivehub<br />
                    เช่ารถระยะสั้น<br />
                    เช่ารถระยะยาว<br />
                    เช่ารถพร้อมคนขับ<br />
                    เช่ารถไม่ใช้บัตรเครดิต<br />
                    เช่ารถบริษัทรายใหญ่<br />
                </div>
                <div className='col-span-1 flex justify-center'>
                    ความช่วยเหลือ<br />
                    วิธีการจอง<br />
                    เอกสารเช่ารถ<br />
                    ประกันภัย<br />
                    ความช่วยเหลือเพิ่มเติม<br />
                </div>

            </div>
        </div>
    </Footer>
    )
}
export default Footer