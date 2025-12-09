import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";


const ContactSection = () => {
  const contactData = [
    {
      id: 1,
      title: "Watsapp",
      value: "(+91) 9442802613",
      link: "https://wa.me/9442802613",
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" width="40" height="40" role="img" viewBox="0 0 512 512" data-iconid="349563" data-svgname="Whatsapp"><rect width="512" height="512" rx="15%" fill="#25d366" id="element_5cd41cc8"></rect><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z" id="element_725aa428"></path><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" id="element_27fa8bee"></path></svg>
      ),
    },
    {
      id: 2,
      title: "Email",
      value: "hello.mathanraj@gmail.com",
      link: "mailto:hello.mathanraj@gmail.com",
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Gmail"  width="40" height="40" role="img" viewBox="0 0 512 512" data-iconid="349378" data-svgname="Gmail"><rect width="512" height="512" rx="15%" fill="#ffffff" id="element_1f696c6b"></rect><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" id="element_52b7fbbe"></path><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" id="element_87e909b7"></path><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" id="element_f9a0f9a2"></path><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" id="element_8d81ca19"></path><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" id="element_e55c841f"></path></svg>
      ),
    },
    {
      id: 3,
      title: "Address",
      value: "Chennai, Tamil Nadu, India",
      link: "https://www.google.com/maps?q=Guindy,Chennai",
      icon: (
          <svg width="40" height="40" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" data-iconid="google-logo-new-maps" data-svgname="Google logo new maps"><path d="M25.3959,8.8345l-.0039.0038c.0837.2319.1617.4667.2285.7062C25.5527,9.3047,25.48,9.067,25.3959,8.8345Z" fill="#4285f4"></path><path d="M16,2.23,8.929,5.1593,12.9916,9.222A4.2486,4.2486,0,0,1,19.0208,15.21L25,9.23l.392-.392A9.9872,9.9872,0,0,0,16,2.23Z" fill="#4285f4"></path><path d="M16,16.4733A4.25,4.25,0,0,1,12.9916,9.222L8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23c0,4.4057,2.2651,7.1668,4.93,10,.1787.1828.3274.3852.4959.5746l7.5608-7.5609A4.2341,4.2341,0,0,1,16,16.4733Z" fill="#ffba00"></path><path d="M16,2.23a10,10,0,0,0-10,10,11.0918,11.0918,0,0,0,.5454,3.4546l12.8505-12.85A9.9563,9.9563,0,0,0,16,2.23Z" fill="#0066da"></path><path d="M16.9011,29.12a21.83,21.83,0,0,1,4.032-6.8966C23.7976,19.3129,26,16.636,26,12.23a9.9585,9.9585,0,0,0-.6041-3.3958l-13.97,13.97A18.0436,18.0436,0,0,1,15.0173,29.08.9975.9975,0,0,0,16.9011,29.12Z" fill="#00ac47"></path><path d="M10.93,22.23c.1787.1828.3274.3852.4959.5746h0C11.257,22.6155,11.1083,22.4131,10.93,22.23Z" fill="#0066da" opacity="0.5"></path><path d="M7.207,7.4637A9.9357,9.9357,0,0,0,6.45,9.2566,9.9429,9.9429,0,0,1,7.207,7.4637Z" fill="#0066da" opacity="0.5"></path><path d="M6.45,9.2566a9.9522,9.9522,0,0,0-.398,1.9513A9.9537,9.9537,0,0,1,6.45,9.2566Z" fill="#0066da" opacity="0.5"></path><path d="M15.1957,29.3989c.02.0248.0445.0422.0664.0644C15.24,29.4411,15.2156,29.4236,15.1957,29.3989Z" fill="#ffffff"></path><path d="M15.7874,29.7429l.04.0066Z" fill="#ffffff"></path><path d="M13.6216,25.9269c-.0371-.067-.0679-.1382-.1059-.2047C13.5533,25.789,13.5849,25.86,13.6216,25.9269Z" fill="#ffffff"></path><path d="M15.0173,29.08q-.3069-.9036-.6906-1.7566C14.5793,27.8937,14.8127,28.4771,15.0173,29.08Z" fill="#ffffff"></path><path d="M15.5269,29.6563c-.0229-.0112-.0463-.0207-.0684-.0338C15.4809,29.6356,15.5036,29.6452,15.5269,29.6563Z" fill="#ffffff"></path><path d="M19.7117,23.7529c-.249.3474-.4679.7125-.6927,1.0741C19.2431,24.465,19.4633,24.1006,19.7117,23.7529Z" fill="#ffffff"></path><polygon fill="#ffffff" points="23.322 19.553 23.322 19.553 23.322 19.553 23.322 19.553"></polygon><path d="M17.0468,28.774h0q.3516-.887.7561-1.7428C17.5316,27.6006,17.2812,28.1826,17.0468,28.774Z" fill="#ffffff"></path><path d="M18.68,25.3584c-.2879.4957-.55,1.0068-.8,1.5242C18.13,26.3647,18.3931,25.8547,18.68,25.3584Z" fill="#ffffff"></path><path d="M8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23a11.0918,11.0918,0,0,0,.5454,3.4546L13,9.23Z" fill="#ea4435"></path></svg>
      ),
    },
    {
      id: 4,
      title: "Linkedin",
      value: "mathanraj",
      link: "https://www.linkedin.com/in/mathan-raj-2439b6285/",
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg"  width="55" height="55" viewBox="0 0 48 48"> <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg>        
      ),    
    },
    {
      id: 5,
      title: "Github",
      value: "mathanraj",
      link: "https://github.com/Mathanraj03",
      icon: (
          <svg width="45" height="45" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>team-collaboration/version-control/github</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="team-collaboration/version-control/github" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="container" transform="translate(2.000000, 2.000000)" fill-rule="nonzero"> <rect id="mask" stroke="#000000" stroke-width="2" fill="#000000" x="-1" y="-1" width="71" height="71" rx="14"> </rect> <path d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z" id="Shape" fill="#FFFFFF"> </path> </g> </g> </g></svg>
      ),    
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; 
    const formData = new FormData(form);

    formData.append("access_key", "0304d506-ca54-42ec-bea4-91fb6560cb14");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        toast.success('Message sent successfully');
        form.reset(); 
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact</h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactData.map((item , idx) => (
            <motion.div
              key={item.id}
              className="bg-[#101010] p-3 rounded-2xl flex flex-col sm:flex-row items-center gap-4 hover:bg-[#151515] transition-all duration-20 shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.10 }}
            >
              {item.icon}
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-white font-medium break-words w-full"
              >
                <div className="w-full flex flex-col items-center sm:items-start sm:ml-3">
                  <p className="text-gray-100 text-sm sm:text-base font-semibold">{item.title}</p>
                  <p className="text-[var(--muted)] text-xs sm:text-sm">{item.value}</p>
                </div>
              </a>
              
            </motion.div>
          ))}
        </div>

      {/* Contact Form */}
      
        <div id="Email" className="section-wrapper max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8"
        >
          <h2 className="text-xl font-semibold text-center text-white p-6">Let's Get in Touch!</h2>

          <form
            onSubmit={onSubmit}
            className="space-y-4"
          >
            <input
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full p-3 rounded-md bg-[var(--panel)] border border-transparent focus:border-[var(--accent)] outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="w-full p-3 rounded-md bg-[var(--panel)] border border-transparent focus:border-[var(--accent)] outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              autoComplete="on"
              className="w-full p-3 rounded-md bg-[var(--panel)] border border-transparent focus:border-[var(--accent)] outline-none"
              required
            />
            <button className="w-full px-4 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold hover:bg-[var(--haccent)] transition">
              Send Message
            </button>
          </form>

          {/* {status && <div className="mt-4 text-[var(--accent)]">{status}</div>} */}
        </motion.div>
        </div>
          <ToastContainer position="top-center" autoClose={1000} theme="dark" />
      </div>
    </section>
  );
};


export default ContactSection;
