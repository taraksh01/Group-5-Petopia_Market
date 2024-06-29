import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mobile = "https://pawsindia.com/cdn/shop/files/Tags-Banner-Mobile.jpg?v=1711991995"
const desktop = "https://pawsindia.com/cdn/shop/files/Tags-Banner-Web_1920x.jpg?v=1711991996"
export default function Banner() {
  const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };
  
      handleResize(); // Initial check
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
    <div onClick={() => navigate('/products')}  className="flex justify-center cursor-pointer items-center h-screen">
      {isMobile ? (
        <img src={mobile} alt="Mobile Image" loading="lazy" className="max-w-full max-h-full" />
      ) : (
        <img src={desktop} alt="Desktop Image" loading="lazy" className="max-w-full max-h-full rounded-xl" />
      )}
    </div>
    </>
  )
}
