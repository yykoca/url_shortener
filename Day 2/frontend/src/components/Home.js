import React from 'react';
import codecademy from '../images/codecademy.png';

function Home({links}) {
    const array = [1, 2, 3, 4, 5]
    return (
        <main>
            {
                links.map(item => {
                    return (
                        <article key={item}>
                            <h2>{item.title}</h2>
                            <img src={codecademy} alt=""></img>
                            <p><em>Learn to Code - for Free</em><br />
                                How it worksFirst, we invented the best system for learning to code.Ten years and 50 million learners
                                later, we've perfected it.
                                Learn by doingFrom building websites to analyzing data, the choice is yours. No matter your experience
                                level, you'll be writing real, working code in minutes.
                                Get instant feedbackYour code is tested as soon as you submit it, so you always know if you're on the
                                right track.
                                Put your learning into practiceApply your learning with real-world projects and learn everything you
                                need to take your career to the next level. Hier ist der Link zum <strong><a href="https://www.codecademy.com" target="_blank" rel="noreferrer">Codecademy</a>.</strong>
                            </p>
                        </article>
                    )
                })
            }
        </main>
    )
}

export default Home
