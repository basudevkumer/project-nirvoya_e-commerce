import { FaStar } from "react-icons/fa";
import Container from "../commonComponent/Container";
export default function ReviewsSections() {
  const ratingStar = [
    { star: 5, percent: 79 },
    { star: 4, percent: 12 },
    { star: 3, percent: 4 },
    { star: 2, percent: 2 },
    { star: 1, percent: 4 },
  ];

  const reviews = [
    {
      img: "/review1.jpg",
      name: "Vanille",
      rating: 5,
      time: "1 month ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/review2.jpg",
      name: "Maduin",
      rating: 5,
      time: "1 month ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/review3.jpg",
      name: "Samantha",
      rating: 5,
      time: "1 month ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/review4.jpg",
      name: "Roveria",
      rating: 5,
      time: "1 month ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  return (
    <Container>
      <section className=" py-16">
        <div className=" px-4">
          {/* Ratting summary  */}
          <div className="md:w-214 lg:grid lg:grid-cols-3 gap-4">
            <div>
              <p className="text-xl text-gray-500 mb-3 font-medium">
                Customer Review
              </p>
              <div className="flex items-center text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <div>
              {ratingStar.map((item, index) => (
                <div key={index} className="md:flex items-center gap-3 mb-3">
                  <span className="w-12 text-sm">{item.star} star</span>

                  <div className="lg:w-54 flex-1 bg-gray-300 h-2 rounded">
                    <div
                      className="h-2 bg-yellow-500 rounded"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-left">{item.percent}%</span>
                </div>
              ))}
            </div>

           <div className="items-center flex md:justify-end md:items-center">
             <button className="w-50 h-10 px-6 py-2 bg-[#0198E9] text-white text-sm rounded cursor-pointer hover:bg-[#0381c5]">
              Write a review
            </button>
           </div>
          </div>

          {/* Review list  */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Reviews({reviews.length})
            </h3>

            <div>
              {reviews.map((review, index) => (
                <div key={index} className="mb-6">
                  <div className="flex gap-2 mb-5">
                    <img src={review.img} alt={review.name} />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="w-56 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                        <span className="text-[#636363] font-medium">5.0</span>
                        <div className="flex items-center text-yellow-500 gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>

                        <span className="text-sm text-gray-500">
                          {review.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add review form  */}

        <div className="max-w-3xl px-4 mt-12">
          <h3 className="text-[24px] font-semibold text-[#383838]">
            Add your review
          </h3>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>

          <form className="grid gap-4">
            <label>Name *</label>
            <input
              type="text"
              placeholder="type your name"
              className="border p-3 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <label>Email *</label>
            <input
              type="email"
              placeholder="enter your email"
              className="border p-3 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <label>Review *</label>

            <textarea
              placeholder="Review"
              rows="4"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="flex gap-2">
              <label className="font-medium text-[#383838]">Rating</label>
              <div className="flex gap-1 mt-1.5 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            <button className="w-50 h-10 px-6 py-2 bg-[#0198E9] text-white text-sm rounded cursor-pointer hover:bg-[#0381c5]">
              Write a review
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
