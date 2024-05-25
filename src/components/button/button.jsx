import Button from 'react-bootstrap/Button';

function PrimaryButton() {
  return (
    <>
      <Button variant="primary" size="lg" active>
        Book Now
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Details
      </Button>
    </>
  );
}

export default PrimaryButton;