import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import Card from '../Layout/Card';

const UserProfile = () => {
  return (
    <Card>
    <section className={classes.profile}>
      
      <h1>Your User Profile</h1>
      <ProfileForm />
      
    </section>
    </Card>
  );
};

export default UserProfile;
