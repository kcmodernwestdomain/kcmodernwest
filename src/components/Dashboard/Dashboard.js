import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Subscriptionservice from '../Subscriptionservice/Subscriptionservice';

const Dashboard = () => {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  useEffect(() => {
    const fetchFullName = async () => {
      const token = getAccessToken();
      console.log('Access Token:', token);

      if (!token) {
        setError('No access token found. Please log in.');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/auth/get-fullname/', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch full name');
        }

        const data = await response.json();
        setFullName(data.fullname);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      }
    };

    fetchFullName();
  }, []);


  const latestUpdates = [
    {
      id: 1,
      title: 'Album 30 — Still Going Strong',
      description: 'Adele\'s critically acclaimed fourth studio album 30, released in November 2021, remains one of the best-selling albums of the decade. Featuring hit singles like "Easy On Me", "Oh My God", and "I Drink Wine", the album earned Adele multiple Grammy nominations and universal praise for its raw, emotional storytelling.'
    },
    {
      id: 3,
      title: 'Weekends With Adele — Las Vegas Residency Concluded',
      description: 'Adele\'s landmark Las Vegas residency "Weekends With Adele" at The Colosseum at Caesars Palace ran from November 2022 through November 2024. Widely regarded as one of the greatest live residencies of the modern era, fans flew in from over 60 countries and tickets resold for up to $10,000. The residency grossed over $400 million.'
    },
  ];

  const fanSpotlight = [
    {
      id: 1,
      name: 'Sophie Williams',
      description: 'Sophie has been an Adele fan since "Chasing Pavements" first hit the radio in 2008. She attended multiple nights of the Las Vegas residency and runs one of the most active Adele fan communities on social media, sharing rare recordings, behind-the-scenes moments, and connecting fans from around the world.'
    },
    {
      id: 2,
      name: 'James Johnson',
      description: 'James discovered Adele\'s music through the album 21 and credits "Someone Like You" with helping him through a difficult time in his life. He is a dedicated collector of Adele vinyl records and merchandise, and has travelled internationally to attend her concerts. He loves sharing his passion with fellow members of this fan club.'
    },
  ];

  const contestsAndGiveaways = [
    {
      id: 2,
      title: 'Exclusive Merch Giveaway',
      description: 'We are giving away limited edition Adele "30" merchandise bundles including vinyl records, tote bags, and photo books. Subscribe to a membership plan for a chance to enter.'
    },
  ];

  const upcomingEvents = [
  
    {
      id: 2,
      date: 'No confirmed dates yet',
      title: 'Stay tuned FOR UPDATES',
      // location: 'Follow @Adele on Instagram & X for updates'
    },
  ];

  return (
    <>
      <div className="dashboard-container">
        <h2>Welcome, Fan</h2>
        {/* {error && <p className="error">Error: {error}</p>} */}

        <section className="section">
          <h3>Latest Updates</h3>
          <ul>
            {latestUpdates.map((update) => (
              <li key={update.id}>
                <strong>{update.title}</strong>
                <p>{update.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Fan Spotlight</h3>
          <ul>
            {fanSpotlight.map((fan) => (
              <li key={fan.id}>
                <strong>{fan.name}</strong>
                <p>{fan.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Contests and Giveaways</h3>
          <ul>
            {contestsAndGiveaways.map((contest) => (
              <li key={contest.id}>
                <strong>{contest.title}</strong>
                <p>{contest.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Upcoming Events</h3>
          <ul>
            {upcomingEvents.map((event) => (
              <li key={event.id}>
                <strong>{event.date}</strong>
                <p>{event.title} — {event.location}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>
        <Subscriptionservice />
      </div>
    </>
  );
};

export default Dashboard;