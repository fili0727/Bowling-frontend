import '../../styling/welcomeText.css'

export default function WelcomeText() {
    return (
        <div className="activities-welcome-text-container">
            <div className="activities-welcome-text-paragraph">
                <p className="activities-welcome-text-container-p">
                    Welcome to our vibrant activity center! We've got something
                    for everyone. Click on any of the activities to learn more
                    about them and to book a time slot. We recommend booking in
                    advance to ensure your spot.
                </p>
            </div>
            <div className="activities-welcome-text-paragraph">
                <h2 className="activities-welcome-text-container-h2">
                    Air Hockey
                </h2>
                <p className="activities-welcome-text-container-p">
                    Our state-of-the-art air hockey stations are a hit with both
                    kids and adults. Challenge your friends or family to a game
                    and see who comes out on top!
                </p>
            </div>
            <div className="activities-welcome-text-paragraph">
                <h2 className="activities-welcome-text-container-h2">
                    Bowling
                </h2>
                <p className="activities-welcome-text-container-p">
                    If you're in the mood for some friendly competition, why not
                    head over to our bowling lanes? With top-notch facilities
                    and equipment, it's the perfect place to strike up some fun.
                </p>
            </div>
            <div className="activities-welcome-text-paragraph">
                <h2 className="activities-welcome-text-container-h2">Dining</h2>
                <p className="activities-welcome-text-container-p">
                    And for those who prefer a more laid-back experience, our
                    dining area offers a wide range of delicious meals in a cozy
                    setting. Enjoy a meal by candlelight and make your evening
                    extra special.
                </p>
            </div>
        </div>
    )
}
