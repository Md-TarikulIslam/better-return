import React from 'react'
import img from "../assets/images/blogs/2.webp"
import { FaClock, FaUserAlt } from 'react-icons/fa'
import { ScrollRestoration } from 'react-router-dom'

const allData = [
    {
        id: 1,
        title: "Artificial Intelligence (Ai) in Sports winning forecast",
        img: img,
        author: 'Shahnawaz Jinnah',
        designation: "COO, BetterReturn ApS",
        date: "September 30, 2023",
        desc: "AI algorithms of sports winning prediction have gained significant attention and importance in recent years. These algorithms leverage the power of artificial intelligence and machine learning to analyze vast amounts of data and provide valuable insights into the outcomes of sporting events. Here’s an overview of how these algorithms work and their key components:   Data Collection:  AI algorithms for sports prediction start by collecting a wide range of data related to the sport in question.This data can include historical game results, player statistics, team performance metrics, weather conditions, injury reports and more.The quality and quantity of data are crucial for building accurate predictive models.  Feature Engineering:     Once the data is collected, feature engineering is often performed to extract meaningful information form raw data.This step involves selecting and transforming relevant variables that can influence the outcome of a game.For instance, in basketball, player shooting percentages, turnovers, and recent performance could be important features.     Model Selection:    Ai algorithms use various machine learning techniques to build predictive models.Some common models include:   Logistic Regression: Useful of binary outcomes like win or lose. Random Forests: Effective for capturing complex interactions in data. Neural Networks: Can handle intricate patterns and relationships in large datasets.   Training and Testing:  The Ai model is trained on historical data, typically split into a training set a testing set.The model learns to identify patterns and correlations in the training data to make predictions.The testing set is used to evaluate the model’s accuracy and generalization capabilities.  Performance Metrics:    To assess the accuracy of the Ai algorithm, various performance metrics are employed, such as accuracy, precision, recall, and F1 score.These metrics help gauge how well the algorithm predicts sporting outcomes.  Real - time Data Integration:  For live sports events, Ai algorithms often integrate real- time data streams to update predictions as the game progresses.This can include player performance updates, score changes, and injury reports.  Continuous Learning:  Ai algorithms for sports predictions are not static; they continuously learn and adapt.New data and insights are incorporated to improve the accuracy of predictions.This adaptability is crucial since player performance and team dynamics can change over time.  Interpretability:  Understanding the reasons behind predictions is essential for trust and decision - making.Some Ai models provide interpretability features to explain why a particular outcome is predicted, such as highlighting the key factors contributing to a win or loss.   Betting and Fantasy Sports:   Ai algorithms are widely used in sports betting and fantasy sports betting and fantasy sports platforms.These algorithms help bettors and fantasy sports enthusiasts make informed decisions by providing predictions and insights into player and team performance.    Ethical Considerations:  Sports prediction Ai Algorithms raise ethical questions, particularly in the context of sports betting.ensuring responsible use of Ai in this domain, addressing issues related to problem gambling, and maintaining data privacy are important considerations.    In conclusion, AI algorithms for sports - winning prediction have revolutionized the way we analyze and enjoy sports.These algorithms provide valuable insights, inform betting decisions, and enhance the overall fan experience.As technology continues to advance, we can expect even more accurate and sophisticated sports prediction models in the future."
    }
]

const ShowBlogs = () => {
    return (
        <div className=' '>
            {
                allData.map((data, index) => {
                    return (
                        <div className='max-w-screen-xl mx-auto pt-40'>
                            <div className='flex items-center gap-3 mb-10 text-[#9cb2d8]'>
                                <p className='flex items-center gap-2 '><FaUserAlt />{data.author} ({data.designation})</p>
                                <p className='flex items-center gap-2'><FaClock />{data.date}</p>
                            </div>
                            <p className='text-6xl font-semibold text-[#596a8b]'>{data.title}</p>
                            <img className='mx-auto rounded-lg hover:scale-110 transition-all my-20 w-3/5' src={data.img} alt="" />
                            <div className='bg-[#162843] p-20 rounded-xl mb-20'>
                                <p className='text-white'>{data.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
            <ScrollRestoration />
        </div>
    )
}

export default ShowBlogs
