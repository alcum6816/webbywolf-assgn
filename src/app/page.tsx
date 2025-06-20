"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Button from "@/components/ui/Button"
import Footer from "@/components/common/Footer"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer?: string
  isOpen: boolean
}

const MotorcycleHomepage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
      isOpen: true,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      isOpen: false,
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    projectDescription: "",
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setFaqs((prev) => prev.map((faq, i) => (i === index ? { ...faq, isOpen: !faq.isOpen } : faq)))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Form submitted successfully!")
  }

  const handleButtonClick = (action: string) => {
    console.log(`${action} button clicked`)
    alert(`${action} action triggered`)
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[700px] lg:h-[861px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/img_heroimage.png"
            alt="Hero motorcycle image"
            width={698}
            height={831}
            className="absolute top-0 right-0 w-full h-full md:w-auto object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-[59px]"
          style={{
            background: "linear-gradient(180deg, #ffffff00 0%, #ffffff 100%)",
          }}
        />

        {/* Header */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[80px] md:h-[100px] flex items-center justify-between px-4 md:px-10 lg:px-20 bg-transparent"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="bg-gray px-4 py-2 md:px-6 md:py-4 rounded"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="font-inter font-extrabold text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[39px] text-primary">
              LOGO
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[22px] text-accent-darker">
                  {item}
                </span>
                <Image src="/images/img_arrowdown.svg" alt="Dropdown" width={8} height={4} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                variant="secondary"
                size="md"
                showArrow={false}
                onClick={() => handleButtonClick("Sign In")}
                className="bg-primary text-primary border border-gray-300"
              >
                Sign In
              </Button>
            </motion.div>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-primary transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-primary transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-primary transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          className={`absolute top-[80px] left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden z-20 ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="font-inter font-medium text-[16px] leading-[20px] text-accent-darker">{item}</span>
                <Image src="/images/img_arrowdown.svg" alt="Dropdown" width={8} height={4} />
              </motion.div>
            ))}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                variant="secondary"
                size="md"
                showArrow={false}
                onClick={() => {
                  handleButtonClick("Sign In")
                  setIsMobileMenuOpen(false)
                }}
                className="bg-primary text-primary border border-gray-300 w-full"
              >
                Sign In
              </Button>
            </motion.div>
          </nav>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="absolute top-[150px] md:top-[200px] lg:top-[293px] left-4 md:left-10 lg:left-20 max-w-[90%] md:max-w-[600px] lg:max-w-[646px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="font-['Roboto_Condensed'] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[36px] md:leading-[52px] lg:leading-[70px] text-secondary mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Lorem ipsum dolor sit amet
          </motion.h1>
          <motion.p
            className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant.
            In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget
            viverra. Nunc euismod ultrices etiam nulla habitasse.
          </motion.p>

          {/* Search Form */}
          <motion.div
            className="flex flex-col md:flex-row items-stretch md:items-center mb-4 md:mb-6 gap-3 md:gap-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="w-full md:w-[280px] lg:w-[324px] h-[40px] md:h-[46px] bg-primary border border-[#c2c2c2] rounded-md md:mr-4"></div>
            <Button onClick={() => handleButtonClick("Submit")}>Submit</Button>
          </motion.div>

          {/* Credit Card Info */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="w-[24px] md:w-[30px] h-[24px] md:h-[29px] bg-accent-light rounded-[12px] md:rounded-[14px] flex items-center justify-center mr-2 md:mr-3">
              <Image src="/images/img_frame_1171275084.svg" alt="Check icon" width={16} height={16} />
            </div>
            <span className="font-inter font-medium text-[13px] md:text-[15px] leading-[16px] md:leading-[19px] text-primary">
              No credit card required!
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 1 - Services */}
      <motion.div
        className="relative w-full bg-white-transparent shadow-[0px_4px_25px_#00000026] border border-[#d3d3d3] mx-4 md:mx-10 lg:mx-20 my-6 md:my-8 rounded"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10">
          <motion.div
            className="flex-1 lg:pr-16 mb-8 lg:mb-0"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] text-accent block mb-4">
              Lorem ipsum dolor sit
            </span>
            <h2 className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-secondary uppercase mb-4 md:mb-6">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-6 md:mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam
              mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            {/* Service Items */}
            <motion.div
              className="space-y-4 md:space-y-6 mb-6 md:mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="flex flex-col md:flex-row items-start bg-primary p-3 md:p-4 rounded gap-3 md:gap-0"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Image
                    src="/images/img_sfldigitalawideshotofanindianmanwearingahelmetsmili49c4732d08d74623a72cb1887dcbab44_1.png"
                    alt={`Service ${item}`}
                    width={139}
                    height={141}
                    className="w-full md:w-[100px] lg:w-[139px] h-auto md:mr-4 lg:mr-6 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button onClick={() => handleButtonClick("Learn More")}>Loerum Ipsum</Button>
              <div className="flex items-center">
                <Image src="/images/img_communication_phone.svg" alt="Phone" width={24} height={24} />
                <span className="font-inter font-semibold text-[13px] md:text-[15px] leading-[16px] md:leading-[19px] text-accent-dark ml-2">
                  123456789
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 flex justify-center lg:justify-end"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/img_section1image.png"
              alt="Section 1 image"
              width={629}
              height={803}
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[629px] h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Gradient line */}
        <motion.div
          className="w-full h-[15px] md:h-[20px] mx-auto"
          style={{
            background: "linear-gradient(90deg, #033798 0%, #079802 50%, #160040 100%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Section 2 - Features */}
      <motion.div
        className="relative w-full py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: "url(/images/img_bggraphic.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="px-4 md:px-10 lg:px-20">
          <motion.span
            className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] text-accent block mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet
          </motion.span>
          <motion.h2
            className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-secondary uppercase mb-4 md:mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu elit.
          </motion.h2>
          <motion.p
            className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-8 md:mb-10 lg:mb-12 max-w-full md:max-w-[600px] lg:max-w-[678px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
            Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <motion.div
              className="flex-1"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex flex-col md:flex-row">
                <motion.div
                  className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-8 lg:space-y-12 mb-6 md:mb-0 md:mr-8 lg:mr-12"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[1, 2, 3].map((item) => (
                    <motion.div key={item} variants={scaleIn}>
                      <Image
                        src="/images/img_suredriveassistfinallogo01_3.png"
                        alt={`Feature icon ${item}`}
                        width={36}
                        height={38}
                        className="w-[30px] md:w-[36px] h-auto"
                      />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex-1"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[1, 2, 3].map((item) => (
                    <motion.div key={item} className="mb-8 md:mb-10 lg:mb-12" variants={fadeInUp}>
                      <h3 className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-secondary mb-2">
                        Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                      </h3>
                      <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary">
                        Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis
                        senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                        donec. Ipsum sit ut tortor.
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="flex-shrink-0 lg:ml-16 flex justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/img_section2image.png"
                alt="Section 2 image"
                width={577}
                height={620}
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[577px] h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Gradient line */}
        <motion.div
          className="w-full h-[15px] md:h-[20px] mt-8 md:mt-10 lg:mt-12"
          style={{
            background: "linear-gradient(90deg, #033798 0%, #079802 50%, #160040 100%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Dark Section with CTA */}
      <motion.div
        className="relative w-full h-[400px] md:h-[550px] lg:h-[652px] bg-black"
        style={{
          backgroundImage: "url(/images/img_banner1image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-start justify-center h-full px-4 md:px-10 lg:px-20 text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="bg-gray px-4 py-2 md:px-6 md:py-4 rounded mb-6 md:mb-8 self-start" variants={scaleIn}>
            <span className="font-inter font-extrabold text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[39px] text-primary">
              LOGO
            </span>
          </motion.div>
          <motion.h2
            className="font-['Roboto_Condensed'] font-bold text-[24px] md:text-[36px] lg:text-[42px] leading-[28px] md:leading-[40px] lg:leading-[54px] text-white uppercase mb-4 md:mb-6 max-w-full md:max-w-[700px] lg:max-w-[900px]"
            variants={fadeInUp}
          >
            <span className="text-white">Lorem ipsum </span>
            <span className="text-white">
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
            </span>
          </motion.h2>
          <motion.p
            className="font-inter font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-white mb-4 md:mb-6 max-w-full md:max-w-[600px] lg:max-w-[732px]"
            variants={fadeInUp}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi
            accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate
            sed ut. Nisl porta massa diam condimentum nulla quam.
          </motion.p>
          <motion.p
            className="font-inter font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-white mb-6 md:mb-8 max-w-full md:max-w-[600px] lg:max-w-[732px]"
            variants={fadeInUp}
          >
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in
            tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus
            quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus
            vitae leo.
          </motion.p>
          <motion.div variants={scaleIn}>
            <Button
              variant="secondary"
              onClick={() => handleButtonClick("CTA")}
              className="bg-primary text-accent-darker"
              showArrow={false}
            >
              Loerum Ipsum
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Brand Logos Section */}
      <motion.div
        className="py-12 md:py-14 lg:py-16 px-4 md:px-20 lg:px-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-secondary uppercase text-center mb-8 md:mb-10 lg:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
        </motion.h2>

        {/* First row of logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16 mb-6 md:mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { src: "/images/img_heromotocorpsvg_1.png", alt: "Hero MotoCorp", width: 86, height: 97 },
            { src: "/images/img_hondalogosvg_1.png", alt: "Honda", width: 121, height: 97 },
            { src: "/images/img_bajajautologo_1.png", alt: "Bajaj Auto", width: 160, height: 90 },
            { src: "/images/img_tvsmotorcompanylogo_1.png", alt: "TVS Motor", width: 222, height: 62 },
          ].map((logo, index) => (
            <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto h-[40px] md:h-[60px] lg:h-auto max-w-[120px] md:max-w-[160px] lg:max-w-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Second row of logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16 mb-6 md:mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              src: "/images/img_royalenfieldlogo2014present1024x742_1.png",
              alt: "Royal Enfield",
              width: 238,
              height: 58,
            },
            { src: "/images/img_648cb22fe2a34861851a5f2060bd6dad_1.png", alt: "Yamaha", width: 173, height: 60 },
            { src: "/images/img_ktmlogosvg_1.png", alt: "KTM", width: 136, height: 53 },
            { src: "/images/img_atherlogo_1.png", alt: "Ather", width: 205, height: 74 },
          ].map((logo, index) => (
            <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto h-[40px] md:h-[60px] lg:h-auto max-w-[120px] md:max-w-[160px] lg:max-w-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Third row of logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { src: "/images/img_olaelectric_1.png", alt: "Ola Electric", width: 185, height: 92 },
            { src: "/images/img_newlogo1_1.png", alt: "New Logo", width: 167, height: 83 },
            { src: "/images/img_ultraviolettelogo_1.png", alt: "Ultraviolette", width: 287, height: 61 },
            { src: "/images/img_ani20221101121927_1.png", alt: "Ani Logo", width: 101, height: 143 },
          ].map((logo, index) => (
            <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto h-[40px] md:h-[60px] lg:h-auto max-w-[120px] md:max-w-[160px] lg:max-w-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Blog/Articles Section */}
      <motion.div
        className="relative w-full py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: "url(/images/img_bggraphic_1726x1440.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="px-4 md:px-10 lg:px-20">
          <motion.span
            className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] text-accent block mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet
          </motion.span>
          <motion.h2
            className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-secondary uppercase mb-4 md:mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            LOREM IPSUM dolor sit
          </motion.h2>
          <motion.p
            className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-8 md:mb-10 lg:mb-12 max-w-full md:max-w-[600px] lg:max-w-[739px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam
            mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </motion.p>

          {/* Article Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                image:
                  "/images/img_momsucaarchitecturedigitalartclassicspanishbuildingsprec854c87e6468449308a9cecbc09f6ae28_1.png",
              },
              {
                image:
                  "/images/img_annalewis208alightgoldcoralredbluewaterfallwhitecc68643e8d08d457ab3c7a05c578462b0_1.png",
              },
              { image: "/images/img_mycariawomanwearingakimonoisflyingar916v61abb2f83995fd496486751ea39ac7f620_1.png" },
              {
                image:
                  "/images/img_reusresearch2511apileoforangescoveredwithleavesandfull3aa539ad3e3f4ec989a8f82f1fc5fbe2_1.png",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                className="bg-primary border border-[#f1efef] rounded-xl p-4"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={`Article ${index + 1}`}
                    width={444}
                    height={205}
                    className="w-full h-[150px] md:h-[180px] lg:h-[205px] object-cover rounded mb-4 md:mb-6"
                  />
                </motion.div>
                <h3 className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-secondary mb-3 md:mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes
                  molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam
                  nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                </p>
                <motion.div
                  className="border-b-2 border-accent w-fit"
                  whileHover={{ borderColor: "#000", transition: { duration: 0.2 } }}
                >
                  <span className="font-inter font-semibold text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] text-accent">
                    Learn More
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Lofi Anime Room Section */}
      <motion.div
        className="relative w-full h-[300px] md:h-[450px] lg:h-[605px] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/img_blvkbeatsalofianimieroomthathasmanydrummachinesandkef29fb2ca718843189334b9054c20e415_1.png"
            alt="Lofi anime room with music equipment"
            width={1444}
            height={605}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Logo positioned top-left */}
        <motion.div
          className="absolute top-4 md:top-8 lg:top-11 left-4 md:left-8 lg:left-[70px] bg-[#dbdbdb] px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-inter font-extrabold text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[39px] text-primary">
            LOGO
          </span>
        </motion.div>

        {/* Centered main text */}
        <motion.div
          className="absolute top-[80px] md:top-[120px] lg:top-[169px] left-1/2 transform -translate-x-1/2 max-w-[90%] md:max-w-[700px] lg:max-w-[812px] text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Roboto_Condensed'] font-bold text-[20px] md:text-[32px] lg:text-[42px] leading-[24px] md:leading-[36px] lg:leading-[49px] text-white uppercase tracking-[-0.4px] md:tracking-[-0.64px] lg:tracking-[-0.84px]">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur.
            Quis adipiscing
          </h2>
        </motion.div>
      </motion.div>

      {/* Quote Request Section */}
      <motion.div
        className="py-12 md:py-14 lg:py-16 px-4 md:px-20 lg:px-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-secondary uppercase text-center mb-8 md:mb-10 lg:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          REQUEST A QUOTE
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-[1092px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* First Row */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8" variants={fadeInUp}>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
            </div>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                E-mail
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
            </div>
          </motion.div>

          {/* Second Row */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8" variants={fadeInUp}>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
            </div>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                <span>Time Frame</span>
                <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="timeFrame"
                value={formData.timeFrame}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4 font-inter font-light text-[12px] md:text-[14px] text-gray-dark"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <option value="">Select time frame</option>
                <option value="immediate">Immediate</option>
                <option value="1-week">Within 1 week</option>
                <option value="1-month">Within 1 month</option>
              </motion.select>
            </div>
          </motion.div>

          {/* Third Row */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8" variants={fadeInUp}>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                <span>Size</span>
                <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4 font-inter font-light text-[12px] md:text-[14px] text-gray-dark"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <option value="">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </motion.select>
            </div>
            <div>
              <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
                <span>Quantity</span>
                <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full h-[40px] md:h-[47px] bg-neutral border-0 rounded-md px-3 md:px-4 font-inter font-light text-[12px] md:text-[14px] text-gray-dark"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <option value="">Select quantity</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11+">11+</option>
              </motion.select>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
            <label className="block font-inter font-normal text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-dark mb-3">
              <span>Please Describe Your Project</span>
              <span className="text-red-500">*</span>
            </label>
            <motion.textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="w-full min-h-[80px] md:min-h-[100px] bg-neutral border-0 rounded-md p-3 md:p-4 font-inter font-light text-[12px] md:text-[14px] text-gray-dark"
              placeholder="Choose a project type"
              whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
            />
          </motion.div>

          {/* Terms and Submit */}
          <motion.div className="text-center" variants={fadeInUp}>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[22px] text-gray-light mb-4 md:mb-6">
              <span>By submitting this form you agree to our </span>
              <span className="underline">Terms of Service</span>
              <span> and </span>
              <span className="underline">Privacy Policy</span>
              <span>.</span>
            </p>
            <Button type="submit">Loerum Ipsum</Button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Mobile App Section */}
      <motion.div
        className="relative bg-gray-lightest py-12 md:py-14 lg:py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center px-4 md:px-10 lg:px-20 gap-8 lg:gap-0">
          <motion.div
            className="flex-1 lg:pr-16 text-center lg:text-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] text-accent block mb-4">
              Lorem Ipsum
            </span>
            <h2 className="font-inter font-extrabold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-primary capitalize mb-6">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-6 md:mb-8">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna
              lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
            </p>

            {/* App Store Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/img_googleplaystorebadgeensvg_1.png"
                  alt="Google Play Store"
                  width={140}
                  height={41}
                  className="w-[120px] md:w-[140px] h-auto"
                />
              </motion.div>
              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/img_downloadontheappstorebadgesvg_1.png"
                  alt="App Store"
                  width={140}
                  height={41}
                  className="w-[120px] md:w-[140px] h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
              <div className="relative">
                <Image
                  src="/images/img_photo.png"
                  alt="Phone mockup"
                  width={963}
                  height={629}
                  className="relative z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto"
                />
                <Image
                  src="/images/img_screen.png"
                  alt="Screen overlay"
                  width={962}
                  height={717}
                  className="absolute top-0 left-0 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="bg-gray-lighter py-12 md:py-14 lg:py-16 px-4 md:px-10 lg:px-20 mb-16 md:mb-24 lg:mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto gap-8 lg:gap-20">
          {/* Text Content Column */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8 w-full lg:w-[460px] flex-shrink-0 justify-center text-center lg:text-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[25px] tracking-wide text-gray-medium block">
                NO LIMITS
              </span>
              <h2 className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-slate uppercase">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum
              nullam.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button onClick={() => handleButtonClick("Gallery CTA")}>Loerum Ipsum</Button>
            </div>
          </motion.div>

          {/* Image Collage Column - Simplified for mobile */}
          <motion.div
            className="relative flex-grow min-h-[300px] md:min-h-[400px] lg:min-h-[605px] overflow-hidden"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mobile/Tablet: Simple grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:hidden">
              {[
                "/images/img_inklings23generateanimageofbikersonsportsbikesgoingto5f6b27fb9136433583e78f5ffa26ae20_2.png",
                "/images/img_minghamagroupofmotorcyclistsontheroadeachridingtheir10f046d47af94e1d8c1734e51aba49e7_1.png",
                "/images/img_eugenia83179fiveridersdrivingmotorbikesatnightonlinzer8c42f2b7dac041159f8921098bf6dbaf_1.png",
                "/images/img_rektzedgroupridesportbikemotorcyclesrealshotfrombehind978f828d549449e8ab0279b285128831_1.png",
                "/images/img_marketingmagnetronphotographtwomenshakinghandsinamotorc1ed4f5ad9d5a47e68cdebc70c9d63c24_2.png",
                "/images/img_adryanaputrithreetouringmotorbikersontopofamountainwea63201d91ae2d4f7b874fd1b141419735_1.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
                  className="aspect-square"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Desktop: Complex absolute positioning layout */}
            <div className="hidden lg:block">
              {/* Image 1 - Top right small */}
              <motion.div
                className="absolute"
                style={{ left: "115px", top: "29px", width: "135px", height: "210px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_inklings23generateanimageofbikersonsportsbikesgoingto5f6b27fb9136433583e78f5ffa26ae20_2.png"
                  alt="Bikers on sports bikes"
                  width={135}
                  height={210}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 2 - Left side tall */}
              <motion.div
                className="absolute"
                style={{ left: "-50px", top: "186px", width: "135px", height: "241px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_minghamagroupofmotorcyclistsontheroadeachridingtheir10f046d47af94e1d8c1734e51aba49e7_1.png"
                  alt="Motorcyclists group"
                  width={135}
                  height={241}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 3 - Top wide */}
              <motion.div
                className="absolute"
                style={{ left: "280px", top: "0px", width: "459px", height: "240px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_eugenia83179fiveridersdrivingmotorbikesatnightonlinzer8c42f2b7dac041159f8921098bf6dbaf_1.png"
                  alt="Night riders"
                  width={459}
                  height={240}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 4 - Bottom left wide */}
              <motion.div
                className="absolute"
                style={{ left: "-375px", top: "457px", width: "459px", height: "239px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_rektzedgroupridesportbikemotorcyclesrealshotfrombehind978f828d549449e8ab0279b285128831_1.png"
                  alt="Sport bikes rear view"
                  width={459}
                  height={239}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 5 - Bottom right wide */}
              <motion.div
                className="absolute"
                style={{ left: "280px", top: "613px", width: "459px", height: "240px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_marketingmagnetronphotographtwomenshakinghandsinamotorc1ed4f5ad9d5a47e68cdebc70c9d63c24_2.png"
                  alt="Business handshake"
                  width={459}
                  height={240}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 6 - Center large */}
              <motion.div
                className="absolute"
                style={{ left: "115px", top: "270px", width: "624px", height: "312px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_adryanaputrithreetouringmotorbikersontopofamountainwea63201d91ae2d4f7b874fd1b141419735_1.png"
                  alt="Mountain touring"
                  width={624}
                  height={312}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 7 - Bottom center small */}
              <motion.div
                className="absolute"
                style={{ left: "115px", top: "613px", width: "135px", height: "210px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_twowheelbanditoarowofusedsportbikesinadealershipphoto2824947175cf4460891ee88f96c71a7c_2.png"
                  alt="Dealership bikes"
                  width={135}
                  height={210}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 8 - Far left bottom */}
              <motion.div
                className="absolute"
                style={{ left: "-539px", top: "523px", width: "135px", height: "231px" }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/img_danazivovagroupofsecurityguardsdressedinblackstandingea70c97bc6f648d18c8e8482472ca252_1.png"
                  alt="Security guards"
                  width={135}
                  height={231}
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Block Section */}
      <motion.div
        className="bg-[#f8f8f8] py-12 md:py-14 lg:py-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1359px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[108px]">
            {/* Image Column */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-[550px] lg:-mt-[122px] order-2 lg:order-1"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
                <Image
                  src="/images/94727c2379864d6c6d963d3b1853bfa71684c2a7.png"
                  alt="Motorcyclists on a road"
                  width={550}
                  height={550}
                  className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="flex-1 max-w-full lg:max-w-[620px] flex flex-col order-1 lg:order-2"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Heading Group */}
              <motion.div
                className="flex flex-col gap-3 md:gap-4 lg:gap-5 mb-8 md:mb-10 lg:mb-[43px]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span
                  className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[29px] text-[#0546d2] tracking-[-0.8px] md:tracking-[-0.88px] lg:tracking-[-0.96px]"
                  variants={fadeInUp}
                >
                  Lorem ipsum
                </motion.span>
                <motion.h2
                  className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-[-0.56px] md:tracking-[-0.72px] lg:tracking-[-0.84px] uppercase m-0"
                  variants={fadeInUp}
                >
                  <span className="text-[#1959ac]">Lorem </span>
                  <span className="text-[#222222]">ipsum dolor sit amet consectetur. Enim donec.</span>
                </motion.h2>
                <motion.p
                  className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-black m-0"
                  variants={fadeInUp}
                >
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                </motion.p>
              </motion.div>

              {/* Cards Group */}
              <motion.div
                className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-[119px] mb-6 md:mb-8 lg:mb-9"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      className="card-item"
                      variants={scaleIn}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <p className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#222222] tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] m-0">
                        Lorem Ipsum
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      className="card-item"
                      variants={scaleIn}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <p className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#222222] tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] m-0">
                        Lorem Ipsum
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.button
                  className="bg-[#1959ac] inline-flex items-center justify-center gap-[10px] px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-[9px] rounded-[5px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] w-[150px] md:w-[165px] lg:w-[179px] h-[32px] md:h-[35px] lg:h-[38px]"
                  onClick={() => handleButtonClick("Content Block CTA")}
                  whileHover={{ scale: 1.05, boxShadow: "0px 6px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-inter font-bold text-[13px] md:text-[14px] lg:text-[15px] leading-[16px] md:leading-[17px] lg:leading-[18px] text-white">
                    Loerum Ipsum
                  </span>
                  <Image
                    src="/images/2596_1240.svg"
                    alt="arrow icon"
                    width={16}
                    height={15}
                    className="w-3 md:w-3.5 lg:w-4 h-auto"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Bar */}
        <motion.div
          className="h-[15px] md:h-[18px] lg:h-[20px] mt-12 md:mt-14 lg:mt-16"
          style={{
            background: "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="bg-accent-light py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-10 lg:mb-12 gap-6 lg:gap-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <span className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] text-white block mb-4">
              Join other Sun harvesters
            </span>
            <h2 className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-white uppercase mb-4 md:mb-6">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-white">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue
              fusce nunc, donec magnis commodo.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              variant="secondary"
              onClick={() => handleButtonClick("Join")}
              className="bg-primary text-primary"
              showArrow={false}
            >
              Lorem Ipsum
            </Button>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: "/images/img_icon_iconoir_thunderstorm.svg",
              name: "Jane Cooper",
              avatar: "/images/img_user_thumb.png",
            },
            {
              icon: "/images/img_icon_iconoir_threestars.svg",
              name: "Ralph Edwards",
              avatar: "/images/img_user_thumb_64x64.png",
            },
            {
              icon: "/images/img_icon_iconoir_tower.svg",
              name: "Courtney Henry",
              avatar: "/images/img_user_thumb_1.png",
            },
            {
              icon: "/images/img_icon_iconoir_timer.svg",
              name: "Cameron Williamson",
              avatar: "/images/img_user_thumb_2.png",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-primary border border-[#e2e8f0] rounded-lg p-6 md:p-8 shadow-[0px_0px_10px_#00000011]"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={testimonial.icon || "/placeholder.svg"}
                alt="Testimonial icon"
                width={64}
                height={64}
                className="mb-4 md:mb-6 w-12 md:w-16 h-12 md:h-16"
              />
              <p className="font-['Roboto'] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] text-slate mb-6 md:mb-8">
                {index === 0 &&
                  "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod."}
                {index === 1 &&
                  "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer."}
                {index === 2 &&
                  "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet."}
                {index === 3 &&
                  "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et."}
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-3 md:mr-4 w-12 md:w-16 h-12 md:h-16"
                />
                <span className="font-['Roboto'] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[22px] text-slate">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center space-x-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-3 h-3 bg-light-blue rounded-full"></div>
          <div className="w-3 h-3 bg-light-blue rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Research Section */}
      <motion.div
        className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <motion.div
            className="flex-1 lg:pr-16 text-center lg:text-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-slate uppercase mb-6 md:mb-8">
              Lorem ipsum dolor sit amet
            </h2>

            {/* Tab Navigation */}
            <motion.div
              className="flex flex-col sm:flex-row mb-6 md:mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                className="px-6 md:px-8 py-2 md:py-3 bg-gray-lighter border border-[#cbd5e1] rounded-t-lg sm:rounded-l-lg sm:rounded-t-none font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-slate"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Research
              </motion.button>
              <motion.button
                className="px-6 md:px-8 py-2 md:py-3 bg-primary border border-[#cbd5e1] font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-slate"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Plan
              </motion.button>
              <motion.button
                className="px-6 md:px-8 py-2 md:py-3 bg-primary border border-[#cbd5e1] rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-slate"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Design
              </motion.button>
            </motion.div>

            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-gray-medium mb-6 md:mb-8">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
              varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
              accumsan.
            </p>
            <motion.div
              className="flex items-center justify-center lg:justify-start"
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <span className="font-['Roboto'] font-medium text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-accent-darker mr-3 md:mr-4">
                Check tools
              </span>
              <Image
                src="/images/img_icon_jamicons_outline_logos_arrowright.svg"
                alt="Arrow right"
                width={24}
                height={24}
                className="w-5 md:w-6 h-5 md:h-6"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/img_section9image.png"
              alt="Research section"
              width={600}
              height={406}
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
            />
            {/* Overlay pattern */}
            <motion.div
              className="absolute top-0 right-0 grid grid-cols-2 gap-1 p-2 md:p-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div key={i} className="w-3 md:w-4 h-3 md:h-4" variants={scaleIn}>
                  <Image
                    src="/images/img_icon_jamicons_outline_logos_plus.svg"
                    alt="Plus icon"
                    width={16}
                    height={16}
                    className="w-full h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="relative bg-gray-light rounded-lg mx-4 md:mx-10 lg:mx-20 py-12 md:py-14 lg:py-16 mb-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16 gap-8">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-accent-darker uppercase mb-4 md:mb-6">
              Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
            </h2>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-6 md:mb-8">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
              Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa
              in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
            </p>
            <div className="flex justify-center lg:justify-start mb-8 md:mb-10 lg:mb-12">
              <Button onClick={() => handleButtonClick("Contact")}>Loerum Ipsum</Button>
            </div>

            {/* Contact Info Card - directly below text */}
            <motion.div
              className="bg-white shadow-[0px_4px_25px_#00000026] rounded p-6 md:p-8 max-w-full lg:max-w-[546px] mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-end mb-4">
                <Image
                  src="/images/img_icons8pushpin100_1.png"
                  alt="Pin icon"
                  width={30}
                  height={30}
                  className="w-6 md:w-8 h-6 md:h-8"
                />
              </div>
              <h3 className="font-inter font-semibold text-[16px] md:text-[18px] leading-[20px] md:leading-[25px] text-secondary mb-3 md:mb-4">
                Lorem ipsum dolor sit
              </h3>
              <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-secondary mb-3 md:mb-4">
                Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
              </p>
              <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-secondary mb-3 md:mb-4">
                Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse
                fermentum velit. Nibh dolor nunc id tristique sit.
              </p>
              <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-secondary">
                Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.
                Ultrices lectus viverra pharetra commodo.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/img_section10image.png"
              alt="Contact section"
              width={570}
              height={570}
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[570px] h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Gradient line */}
        <motion.div
          className="w-full h-[15px] md:h-[18px] lg:h-[20px] mt-12 md:mt-16 lg:mt-20"
          style={{
            background: "linear-gradient(90deg, #033798 0%, #079802 50%, #160040 100%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Blog Article Section */}
      <motion.div
        className="py-12 md:py-14 lg:py-16 px-4 md:px-10 lg:px-20 mb-12 md:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-slate uppercase text-center mb-4 md:mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet
        </motion.h2>
        <motion.p
          className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-slate text-center mb-8 md:mb-10 lg:mb-12 max-w-[1280px] mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla
          aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus
          ornare. Risus elit et fringilla habitant ut facilisi.
        </motion.p>

        <motion.div
          className="relative max-w-[1280px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
            <Image
              src="/images/img_section11image.png"
              alt="Blog article"
              width={680}
              height={412}
              className="w-full h-[250px] md:h-[350px] lg:h-[412px] object-cover rounded"
            />
          </motion.div>

          {/* Article Info Card */}
          <motion.div
            className="relative lg:absolute lg:bottom-[-40px] lg:right-8 bg-primary border border-[#e2e8f0] rounded p-6 md:p-8 max-w-full lg:max-w-[680px] shadow-[0px_0px_10px_#00000011] mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <span className="font-inter font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] tracking-wide text-gray-medium block mb-3 md:mb-4">
              Artist & Investor
            </span>
            <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-slate mb-4 md:mb-6">
              Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id
              netus tincidunt. Egestas ac arcu amet nisl quis est ...
            </p>
            <motion.div className="flex items-center" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
              <span className="font-['Roboto'] font-medium text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-accent-darker mr-3 md:mr-4">
                Read Full Story
              </span>
              <Image
                src="/images/img_icon_jamicons_outline_logos_arrowright_blue_900_01.svg"
                alt="Arrow right"
                width={24}
                height={24}
                className="w-5 md:w-6 h-5 md:h-6"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center space-x-4 mt-12 md:mt-16 lg:mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="w-3 h-3 bg-light-blue rounded-md" variants={scaleIn}></motion.div>
          <motion.div className="w-12 h-3 bg-accent-darker rounded-md" variants={scaleIn}></motion.div>
          <motion.div className="w-3 h-3 bg-light-blue rounded-md" variants={scaleIn}></motion.div>
          <motion.div className="w-3 h-3 bg-light-blue rounded-md" variants={scaleIn}></motion.div>
          <motion.div className="w-3 h-3 bg-light-blue rounded-md" variants={scaleIn}></motion.div>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="bg-off-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[50px] text-secondary uppercase mb-8 md:mb-10 lg:mb-12 text-center lg:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </motion.h2>

        <motion.div
          className="max-w-[1199px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} className="border-t border-[#11111133]" variants={fadeInUp}>
              <motion.div
                className="flex items-center justify-between py-6 md:py-8 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)", transition: { duration: 0.2 } }}
              >
                <div className="flex-1 pr-4 md:pr-8">
                  <h3 className="font-inter font-semibold text-[16px] md:text-[18px] leading-[20px] md:leading-[22px] text-primary mb-2">
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{
                      height: faq.isOpen && faq.answer ? "auto" : 0,
                      opacity: faq.isOpen && faq.answer ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer && (
                      <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary pt-2">
                        {faq.answer}
                      </p>
                    )}
                  </motion.div>
                </div>
                <motion.div animate={{ rotate: faq.isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <Image
                    src={faq.isOpen ? "/images/img_plus.svg" : "/images/img_plus_black_900.svg"}
                    alt={faq.isOpen ? "Minus" : "Plus"}
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        className="py-12 md:py-14 lg:py-16 px-4 md:px-10 lg:px-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="bg-gray px-4 py-2 md:px-6 md:py-4 rounded mb-6 md:mb-8 inline-block"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-inter font-extrabold text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[39px] text-primary">
            LOGO
          </span>
        </motion.div>
        <motion.h2
          className="font-['Roboto_Condensed'] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[49px] text-secondary uppercase mb-4 md:mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur. Dui.
        </motion.h2>
        <motion.p
          className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[25px] text-primary mb-6 md:mb-8 max-w-[492px] mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
        </motion.p>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button onClick={() => handleButtonClick("Final CTA")}>Loerum Ipsum</Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default MotorcycleHomepage
