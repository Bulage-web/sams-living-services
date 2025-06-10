// Sam's Living Services Website - Final Version with Logo and Background
document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- Header -->
        <header style="position: absolute; top: 0; left: 0; right: 0; z-index: 50; background: rgba(255,255,255,0.95); padding: 16px 32px; backdrop-filter: blur(10px);">
            <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
                <img src="SamsLivingLogo2.png" alt="Sam's Living Services" style="height: 48px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; font-size: 24px; font-weight: bold; color: #111827;">Sam's Living Services</div>
                <button style="display: none; color: #111827; background: none; border: none; font-size: 24px; cursor: pointer;">☰</button>
            </div>
        </header>

        <!-- Hero Section with Background Image -->
        <section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 16px; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><defs><linearGradient id=%22bg%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:%23f59e0b%22/><stop offset=%2250%25%22 style=%22stop-color:%23d97706%22/><stop offset=%22100%25%22 style=%22stop-color:%2392400e%22/></linearGradient></defs><rect width=%221200%22 height=%22800%22 fill=%22url(%23bg)%22/><circle cx=%22200%22 cy=%22150%22 r=%2280%22 fill=%22rgba(255,255,255,0.1)%22/><circle cx=%221000%22 cy=%22600%22 r=%22120%22 fill=%22rgba(255,255,255,0.05)%22/><circle cx=%22800%22 cy=%22200%22 r=%2260%22 fill=%22rgba(255,255,255,0.08)%22/></svg>'); background-size: cover; background-position: center; background-attachment: fixed; position: relative;">
            <div style="position: relative; z-index: 10; max-width: 1000px;">
                <h1 style="font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; color: white; margin-bottom: 24px; line-height: 1.1; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                    SUPPORT THAT FEELS<br>LIKE SUNSHINE
                </h1>
                <p style="font-size: clamp(1.2rem, 4vw, 1.5rem); color: white; margin-bottom: 48px; max-width: 800px; margin-left: auto; margin-right: auto; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                    Helping adults live independently with dignity and heart.
                </p>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: center; max-width: 400px; margin: 0 auto;">
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com'" style="width: 100%; background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" onmouseover="this.style.background='#78350f'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#92400e'; this.style.transform='translateY(0)'">
                        EMAIL US
                    </button>
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com?subject=Request Support'" style="width: 100%; background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" onmouseover="this.style.background='#78350f'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#92400e'; this.style.transform='translateY(0)'">
                        REQUEST SUPPORT
                    </button>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section style="padding: 80px 16px; background: #f9fafb; text-align: center;">
            <div style="max-width: 1000px; margin: 0 auto;">
                <h2 style="font-size: clamp(2rem, 6vw, 3rem); font-weight: bold; color: #111827; margin-bottom: 32px;">
                    ABOUT SAM'S LIVING SERVICES
                </h2>
                <p style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                    At Sam's Living Services, we offer compassionate, non-medical assistance to adults who need a helping hand. Our goal is to support independent living with respect.
                </p>
            </div>
        </section>

        <!-- What We Offer Section -->
        <section style="padding: 80px 16px; background: white; text-align: center;">
            <div style="max-width: 1000px; margin: 0 auto;">
                <h2 style="font-size: clamp(2rem, 6vw, 3rem); font-weight: bold; color: #111827; margin-bottom: 48px;">
                    WHAT WE OFFER
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; max-width: 700px; margin: 0 auto;">
                    <div style="display: flex; align-items: center; text-align: left; padding: 16px; border-radius: 8px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Household help</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left; padding: 16px; border-radius: 8px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Companionship</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left; padding: 16px; border-radius: 8px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Errands and admin</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left; padding: 16px; border-radius: 8px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Quick and flexible support</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Get In Touch Section -->
        <section style="padding: 80px 16px; background: #f9fafb; text-align: center;">
            <div style="max-width: 1000px; margin: 0 auto;">
                <h2 style="font-size: clamp(2rem, 6vw, 3rem); font-weight: bold; color: #111827; margin-bottom: 48px;">
                    GET IN TOUCH
                </h2>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: center; max-width: 400px; margin: 0 auto;">
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com'" style="width: 100%; background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(146,64,14,0.3);" onmouseover="this.style.background='#78350f'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#92400e'; this.style.transform='translateY(0)'">
                        EMAIL US
                    </button>
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com?subject=Request Support'" style="width: 100%; background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(146,64,14,0.3);" onmouseover="this.style.background='#78350f'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#92400e'; this.style.transform='translateY(0)'">
                        REQUEST SUPPORT
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer style="padding: 32px 16px; background: white; border-top: 1px solid #e5e7eb; text-align: center;">
            <div style="max-width: 1000px; margin: 0 auto;">
                <p style="color: #6b7280;">
                    © 2025 Sam's Living Services Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    `;

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add mobile menu functionality
    const menuButton = document.querySelector('header button');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            // Mobile menu functionality can be added here if needed
        });
    }
});

