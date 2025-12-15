import { useState } from 'react'
import heroImage from './assets/Hero-home-group.png'
import backgroundImage from './assets/background.png'
import shapeImage from './assets/about-1-shape-2.png'
import handImage from './assets/slider-1-hand-1.png'
import bloodBagImage from './assets/doctor.jpg'
import medicalSceneImage from './assets/doctor.jpg'
import smilingChildImage from './assets/work-pledge.png'
import nurseImage from './assets/impact-led.png'
import schoolChildrenImage from './assets/smiling.jpg'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [donationStep, setDonationStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'Rwanda'
  })

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />
      case 'global-need': return <GlobalNeedPage />
      case 'impact': return <ImpactPage />
      case 'donate': return <DonatePage donationStep={donationStep} setDonationStep={setDonationStep} formData={formData} setFormData={setFormData} />
      default: return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        background: '#701C45',
        padding: '20px 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
              LIFE DROP
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <button onClick={() => setCurrentPage('home')} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}>HOME</button>
            <button onClick={() => setCurrentPage('about')} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}>ABOUT US</button>
            <button onClick={() => setCurrentPage('global-need')} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}>THE GLOBAL NEED</button>
            <button onClick={() => setCurrentPage('impact')} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}>IMPACT</button>
          </nav>
        </div>
      </header>
      
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer style={{ 
        background: '#701C45', 
        color: 'white',
        padding: '60px 0 30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                LIFE DROP
              </div>
              <p style={{ lineHeight: '1.6', fontSize: '14px' }}>
                Join us in transforming survival odds worldwide — by ensuring every woman giving birth, every child battling malaria, and every accident victim fighting for life has access to the life-saving blood they need.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>QUICK LINKS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Our Mission</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>FUND OUR MISSION</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Corporate Giving</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Donate Equipment</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>FAQ</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>CONTACT INFORMATION</h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <p>📧 Info@lifedrop.org</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
            <div>Copyright © 2025 LIFE DROP | Powered by LIFE DROP</div>
            <div>
              <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: 'bold', 
                color: '#701C45',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}>
                TO GIVE IS HUMAN
              </h1>
              <p style={{ 
                fontSize: '18px', 
                color: '#666', 
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Save lives by helping the world's poorest countries collect sufficient, safe blood.
              </p>
              <button 
                onClick={() => setCurrentPage('donate')}
                style={{ 
                  background: '#701C45',
                  color: 'white', 
                  padding: '16px 32px', 
                  borderRadius: '25px', 
                  border: 'none', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                DONATE NOW
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                position: 'relative'
              }}>
                {/* Decorative shapes */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  right: '240px',
                  width: '200px',
                  height: '150px',
                  backgroundImage: `url(${shapeImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  transform: 'rotate(60deg)'
                }}></div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-4px', 
                  left: '390px',
                  width: '200px',
                  height: '150px',
                  backgroundImage: `url(${shapeImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  transform: 'rotate(-60deg)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Safe Blood Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                color: '#701C45',
                marginBottom: '24px'
              }}>
                WHY SAFE BLOOD SAVES LIVES
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: '#666', 
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                In many low-income countries, hospitals face critical shortages of safe blood. Patients—especially women in childbirth, children with severe anemia, and accident victims—suffer and sometimes die due to the lack of an adequate blood supply. Meanwhile, wealthier nations enjoy a stable, safe blood supply that is readily available.
              </p>
              
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #701C45', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#701C45' }}></div>
                  </div>
                  <span style={{ fontSize: '16px', color: '#666' }}>Every 2 seconds, someone needs blood.</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #701C45', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#701C45' }}></div>
                  </div>
                  <span style={{ fontSize: '16px', color: '#666' }}>Over 50% of people in low-income countries do not have access to safe blood transfusions.</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #701C45', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#701C45' }}></div>
                  </div>
                  <span style={{ fontSize: '16px', color: '#666' }}>1 donation can save up to 3 lives.</span>
                </div>
              </div>
              
              <button 
                onClick={() => setCurrentPage('donate')}
                style={{ 
                  background: '#701C45',
                  color: 'white', 
                  padding: '16px 32px', 
                  borderRadius: '25px', 
                  border: 'none', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                DONATE NOW
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                backgroundImage: `url(${medicalSceneImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-93px',
                  right: '-93px',
                  width: '280px',
                  height: '180px',
                  borderRadius: '8px',
                  backgroundImage: `url(${schoolChildrenImage})`,
                  backgroundSize: 'cover',
                  border: '3px solid rgba(255, 255, 255, 0.8)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make Impact Section */}
      <section style={{ padding: '80px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#701C45',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            HOW WE MAKE AN IMPACT
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                backgroundImage: `url(${smilingChildImage})`,
                backgroundSize: 'cover',
                position: 'relative'
              }}>
                {/* Decorative elements */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-50px', 
                  left: '-50px',
                  width: '180px',
                  height: '135px',
                  backgroundImage: `url(${shapeImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  backgroundImage: `url(${handImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: '#701C45', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>❤️</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#701C45', margin: 0 }}>WE DONATE</h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>Providing funding, equipment, and expertise to low-income countries.</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: '#701C45', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>👥</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#701C45', margin: 0 }}>WE ENCOURAGE</h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>The blood banking community to share resources.</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: '#701C45', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>📢</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#701C45', margin: 0 }}>WE ADVOCATE</h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>Promoting voluntary, unpaid blood donation globally.</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: '#701C45', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>💡</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#701C45', margin: 0 }}>WE INFORM</h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>Raising awareness about blood shortages and transfusion safety issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#701C45',
            marginBottom: '32px'
          }}>
            A LEGACY OF LIFE-SAVING WORK
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Since 2008, LIFE DROP has worked to ensure that no patient is left without access to safe blood. By delivering essential medical supplies and funding life-saving programs, we empower hospitals and blood banks in under-resourced regions to improve transfusion safety. Our efforts have included providing <strong>2,000+ blood mixers/scales</strong> to enhance testing accuracy and supplying nearly <strong>20 mobile donation vehicles</strong> to reach remote communities.
          </p>
        </div>
      </section>



      {/* Fund Mission Section */}
      <section style={{ padding: '80px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#701C45',
            marginBottom: '24px'
          }}>
            BE A VOICE TO FUND OUR MISSION
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#666', 
            marginBottom: '60px'
          }}>
            Help LIFE DROP save communities in crisis. Make your tax-deductible gift today.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div style={{ 
              background: '#701C45',
              color: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>CORPORATE GIVING</h3>
              <p style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
                Help LIFE DROP save communities in crisis. Make your tax-deductible gift today or match 1:1 donations when your employees give.
              </p>
              <button style={{ 
                background: 'white',
                color: '#701C45',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Give Today
              </button>
            </div>
            
            <div style={{ 
              background: '#701C45',
              color: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🙌</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>OPEN ARMS</h3>
              <p style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
                Open Arms partners encourage their donors to "give twice" by forgoing their donor gift for a financial donation on the donor's behalf to LIFE DROP.
              </p>
              <button style={{ 
                background: 'white',
                color: '#701C45',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Sign Up
              </button>
            </div>
            
            <div style={{ 
              background: '#701C45',
              color: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>💰</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>DONATE EQUIPMENT</h3>
              <p style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
                Consider donating no-longer-needed equipment or supplies for rehoming to a low-income country.
              </p>
              <button style={{ 
                background: 'white',
                color: '#701C45',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Visit EQxchange
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function DonatePage({ donationStep, setDonationStep, formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setDonationStep(2)
  }

  const handlePrevious = () => {
    setDonationStep(1)
  }

  const handleSubmit = () => {
    alert('Thank you for your donation!')
  }

  return (
    <div style={{ padding: '80px 0', background: '#f5f5f5', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#701C45',
            marginBottom: '16px'
          }}>
            MAKE AN IMPACT TODAY
          </h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
            Your support ensures that life-saving blood is accessible where it's needed most.
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#701C45' }}>
              Step {donationStep} of 3
            </span>
          </div>
          <div style={{ 
            width: '100%', 
            height: '8px', 
            background: '#e0e0e0', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${(donationStep / 3) * 100}%`, 
              height: '100%', 
              background: '#4CAF50',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {donationStep === 1 && (
          <div style={{ 
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '8px'
              }}>
                Name <span style={{ color: '#e74c3c' }}>(Required)</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '4px', display: 'block' }}>First</label>
                  <input 
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '4px', display: 'block' }}>Last</label>
                  <input 
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '8px'
              }}>
                Email <span style={{ color: '#e74c3c' }}>(Required)</span>
              </label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  border: '2px solid #e0e0e0', 
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button 
              onClick={handleNext}
              style={{ 
                background: '#701C45',
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                border: 'none', 
                fontSize: '16px', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Next
            </button>
          </div>
        )}

        {donationStep === 2 && (
          <div style={{ 
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '8px'
              }}>
                Country
              </label>
              <select 
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  border: '2px solid #e0e0e0', 
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Rwanda">Rwanda</option>
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Tanzania">Tanzania</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={handlePrevious}
                style={{ 
                  background: '#6c757d',
                  color: 'white', 
                  padding: '16px 32px', 
                  borderRadius: '8px', 
                  border: 'none', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Previous
              </button>
              <button 
                onClick={handleSubmit}
                style={{ 
                  background: '#701C45',
                  color: 'white', 
                  padding: '16px 32px', 
                  borderRadius: '8px', 
                  border: 'none', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div style={{ padding: '80px 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#701C45', marginBottom: '24px' }}>About LIFE DROP</h1>
        <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          We are dedicated to ensuring safe blood access worldwide through funding, equipment, and expertise.
        </p>
      </div>
    </div>
  )
}

function GlobalNeedPage() {
  return (
    <div style={{ padding: '80px 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#701C45', marginBottom: '24px' }}>The Global Need</h1>
        <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          Understanding the critical blood shortage crisis affecting millions worldwide.
        </p>
      </div>
    </div>
  )
}

function ImpactPage() {
  return (
    <div style={{ padding: '80px 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#701C45', marginBottom: '24px' }}>Our Impact</h1>
        <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          See how LIFE DROP is making a difference in communities worldwide.
        </p>
      </div>
    </div>
  )
}

export default App