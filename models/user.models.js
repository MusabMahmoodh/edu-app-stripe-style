import { USER_ROLES } from "./constants.models";
import { createUser, getUser } from "../firebase/userActions";

class User {
  userType = USER_ROLES.STUDENT;
  activeUserType = USER_ROLES.STUDENT;
  userId = null;
  mobileNumber = "";
  email = null;
  firstName = "";
  lastName = "";
  dateOfBirth = new Date();
  profilePic = null;
  // Specific for Tutors
  tutorId = null;
  tutorQualification = null;
  tutorVerificationStatus = null;

  //   constructor(userId) {
  //     this._userId = userId;
  //   }
  //   constructor() {

  //   }

  get userId() {
    return this.userId;
  }
  set userId(value) {
    this.userId = value;
  }
  get userType() {
    return this.userType;
  }

  set userType(value) {
    this.userType = value;
  }

  get activeUserType() {
    return this.activeUserType;
  }

  set activeUserType(value) {
    this.activeUserType = value;
  }

  get mobileNumber() {
    return this.mobileNumber;
  }

  set mobileNumber(value) {
    this.mobileNumber = value;
  }

  get email() {
    return this.email;
  }

  set email(value) {
    this.email = value;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(value) {
    this.firstName = value;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(value) {
    this.lastName = value;
  }

  get dateOfBirth() {
    return this.dateOfBirth;
  }

  set dateOfBirth(value) {
    this.dateOfBirth = value;
  }

  get profilePic() {
    return this.profilePic;
  }

  set profilePic(value) {
    this.profilePic = value;
  }

  get tutorId() {
    return this.tutorId;
  }

  set tutorId(value) {
    this.tutorId = value;
  }

  get tutorQualification() {
    return this.tutorQualification;
  }

  set tutorQualification(value) {
    this.tutorQualification = value;
  }

  get tutorVerificationStatus() {
    return this.tutorVerificationStatus;
  }

  set tutorVerificationStatus(value) {
    this.tutorVerificationStatus = value;
  }

  //Functions
  async save() {
    const res = await createUser(this.userId, {
      userType: this.userType,
      activeUserType: this.activeUserType,
      mobileNumber: this.mobileNumber,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      profilePic: this.profilePic,
    });

    return res;
  }
  async getUserById() {
    const res = await getUser(this.userId);
    return res;
  }

  releaseUser() {
    this.userId = null;
  }

  updateUserAllFields({
    userType,
    mobileNumber,
    email,
    firstName,
    lastName,
    dateOfBirth,
    profilePic,
  }) {
    this.userType = userType;

    this.mobileNumber = mobileNumber;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.profilePic = profilePic;
  }
}

const user = new User();

export default user;
