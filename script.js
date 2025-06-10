// Sam's Living Services Website
document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- Header -->
        <header style="position: absolute; top: 0; left: 0; right: 0; z-index: 50; background: rgba(0,0,0,0.2); padding: 16px 32px;">
            <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
                <img src="SamsLivingLogo2.png" alt="Sam's Living Services" style="height: 48px; filter: brightness(0) invert(1);">
                <button style="display: none; color: white; background: none; border: none; font-size: 24px;">☰</button>
            </div>
        </header>

        <!-- Hero Section -->
        <section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 16px; background: linear-gradient(135deg, #d97706, #f59e0b, #d97706); position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3);"></div>
            <div style="position: relative; z-index: 10; max-width: 1000px;">
                <h1 style="font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; color: white; margin-bottom: 24px; line-height: 1.1;">
                    SUPPORT THAT FEELS<br>LIKE SUNSHINE
                </h1>
                <p style="font-size: clamp(1.2rem, 4vw, 1.5rem); color: white; margin-bottom: 48px; max-width: 800px; margin-left: auto; margin-right: auto;">
                    Helping adults live independently with dignity and heart.
                </p>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com'" style="background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: background 0.3s;">
                        EMAIL US
                    </button>
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com?subject=Request Support'" style="background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: background 0.3s;">
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
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 600px; margin: 0 auto;">
                    <div style="display: flex; align-items: center; text-align: left;">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Household help</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left;">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Companionship</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left;">
                        <div style="width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; margin-right: 16px; flex-shrink: 0;"></div>
                        <span style="font-size: clamp(1.1rem, 3vw, 1.25rem); color: #374151;">Errands and admin</span>
                    </div>
                    <div style="display: flex; align-items: center; text-align: left;">
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
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com'" style="background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: background 0.3s;">
                        EMAIL US
                    </button>
                    <button onclick="window.location.href='mailto:hello@samslivingservices.com?subject=Request Support'" style="background: #92400e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: background 0.3s;">
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

    // Add hover effects
    const buttons = document.querySelectorAll('button[onclick]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = '#78350f';
        });
        button.addEventListener('mouseleave', function() {
            this.style.background = '#92400e';
        });
    });
});

