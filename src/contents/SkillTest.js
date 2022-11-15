import React, { useState } from 'react';
import '../styles/SkillTest.css';

import htmlLogo from '../assets/html-5.png';
import LineCh from './LineChart';
import DoughnutChart from './DoughnutChart';
import ProgressBar from './ProgressBar';
import Modal from './Modal';

const initialValues = {
  rank: 12890,
  percentile: 37,
  score: '07',
};

const SkillTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(initialValues);

  const stats = [
    {
      id: 0,
      icon: '🏆',
      stat: values.rank,
      statName: 'YOUR RANK',
    },
    {
      id: 1,
      icon: '📋',
      stat: `${values.percentile}%`,
      statName: 'PERCENTILE',
    },
    {
      id: 2,
      icon: '✅',
      stat:
        values.score < 10
          ? `${values.score.padStart(2, '0')}/15`
          : `${values.score}/15`,
      statName: 'CORRECT ANSWERS',
    },
  ];

  return (
    <>
      <main className="skillTest">
        <p className="skillName">Skill Test</p>
        <div className="skillCard">
          <section className="skillOverview">
            <div className="skillHeader">
              <div className="skillLeft">
                <img
                  src={htmlLogo}
                  alt='HTML5 logo'
                  className="skillImg"
                />
                <div className="skillDetails">
                  <div className="skillTitle">
                    HyperText Markup Language
                  </div>
                  <p className="skillDetails">
                    Questions: 09 | Duration: 15 mins | Submitted on 15 Nov 2022
                  </p>
                </div>
              </div>
              <div className="modalWrapper">
                <button
                  onClick={() => setIsOpen(true)}
                  className="skillActions"
                >
                  Update
                </button>
                <Modal
                  values={values}
                  setValues={setValues}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                ></Modal>
              </div>
            </div>

            <div className="statisticsCard">
              <div className="statisticsTitle">Quick Statistics</div>
              <ul className="statisticsDetails">
                {stats.map((stat) => (
                  <li key={stat.id} className="statisticsItem">
                    <div className="statisticIcon">{stat.icon}</div>
                    <div>
                      <div className="statData">{stat.stat}</div>
                      <p className="statisticName">{stat.statName}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="comparisonCard">
              <div className="comparisonHeader">
                <div className="comparisonLeft">
                  <div className="comparisonTitle">
                    <strong>Comparison Graph</strong>
                  </div>
                  <p className="comparisonDetails">
                    <strong>You scored {values.percentile}% percentile</strong>{' '}
                    which is {values.percentile < 75 ? 'lower' : 'higher'} than
                    the average percentile 72% of all the engineers who took
                    this assessment
                  </p>
                </div>
                <div className="comparisonRight">
                  <p className="comparisonEmoji">📈</p>
                </div>
              </div>
              <div className="lineWrapper">
                <LineCh />
              </div>
            </div>
          </section>

          <section className="skillsRight">
            <div className="syllabusAnalysis">
              <div className="syllabusHeader">
                <strong>Syllabus wise Analysis</strong>
              </div>
              <div>
                <p>HTML Tools, Forms, History</p>
                <ProgressBar done={80} color='#438AF6' />
              </div>
              <div>
                <p>Tags & References in HTML</p>
                <ProgressBar done={60} color='#FF9142' />
              </div>
              <p>Tables & CSS Basics</p>
              <ProgressBar done={24} color='#FB5E5E' />

              <div>
                <p>Tables & CSS Basics</p>
                <ProgressBar done={96} color='#2EC971' />
              </div>
            </div>

            <div className="questionAnalysis">
              <div className="questionHeader">
                <div>Question Analysis</div>
                <p>
                  {values.score < 10
                    ? `${values.score.padStart(2, '0')}/15`
                    : `${values.score}/15`}
                </p>
              </div>
              <p className="questionDetails">
                <strong>
                  You scored {values.score} questions correct out of 15.
                </strong>{' '}
                {values.score < 15
                  ? 'However it still needs some improvements'
                  : ''}
              </p>
              <DoughnutChart score={values.score} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SkillTest;
