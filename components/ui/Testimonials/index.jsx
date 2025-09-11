import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    // {
    //   avatar:
    //     "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   name: "Alex wonderson",
    //   title: "Founder of Lyconf",
    //   quote:
    //     "As a small business owner, I was doing everything and my workload was increasing. With this startup, I was able to save time so I could focus on the things that matter most: my clients and my family.",
    // },
    // {
    //   avatar:
    //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   name: "Karim ahmed",
    //   title: "DevOps engineer",
    //   quote:
    //     "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved $10k over the course of 3 years and another saves 8 hours per week! Thanks to CLICK PULSO.",
    // },
    // {
    //   avatar:
    //     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    //   name: "Lysa stian",
    //   title: "System manger",
    //   quote:
    //     "My business was in a dire situation. I had no idea what to do, and I felt like I was losing hope. Then I found this Startup and everything changed. It helped me create automated sales.",
    // },
    // {
    //   avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    //   name: "Angela stian",
    //   title: "Product designer",
    //   quote:
    //     "One day, my company was about to go under and I had no idea what to do. I found CLICK PULSO and it helped me get my business back on track.Now, my company is flourishing and I see new opportunities.",
    // },
    // {
    //   avatar:
    //     "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    //   name: "Jurica koletic",
    //   title: "Founder of Let’s code",
    //   quote:
    //     "In these difficult economic times, doing business is tough. Funding is hard to come by and many entrepreneurs are struggling to keep their doors open. but when I found this startup everything changed.",
    // },
    // {
    //   avatar:
    //     "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   name: "Kavi laron",
    //   title: "Full stack engineer",
    //   quote:
    //     "We all know how costly it is to find good help. I was faced with this problem when I lost my data entry staff and my business was on the brink of going under. Thankfully, CLICK PULSO saved the day.",
    // },
  ];

  return (
    <SectionWrapper className="pb-0">
      <div id="resultados" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Veja o que estão dizendo sobre nós
          </h2>
          <p className="mt-3 text-white">
            Nossos clientes estão satisfeitos com nossos serviços e soluções de
            TI. Veja o que eles têm a dizer sobre nós e como podemos ajudar sua
            empresa a crescer e se destacar no mercado.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-gradient-to-tr from-blue-700/10 to-indigo-600/50 opacity-60
                hover:opacity-100 border border-gray-700 p-4 rounded-xl cursor-default"
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
                    <div>
                      <span className="block text-white font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-white text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-white">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
