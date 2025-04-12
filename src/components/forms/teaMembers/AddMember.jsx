import React, { useState, useEffect } from 'react';

const TeamForm = () => {
 
  // Leader id from localStorage
  const [leaderId, setLeaderId] = useState(null);
  // State for team members array - each with member details
  const [members, setMembers] = useState([{
    memberId: '',
    memberName: '',
    memberEmail: '',
    memberPhone: ''
  }]);
  
  // On component mount, retrieve the leader id from localStorage
  useEffect(() => {
    const storedLeaderId = localStorage.getItem('leader_id');
    if (storedLeaderId) {
      setLeaderId(storedLeaderId);
    }
  }, []);

  // Handle changes for team member fields
  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  // Adds a new team member object
  const addMemberField = () => {
    setMembers([...members, {
      memberId: '',
      memberName: '',
      memberEmail: '',
      memberPhone: ''
    }]);
  };

  // Removes a member field at a given index
  const removeMemberField = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const teamData = {
      // id is auto-incremented in the database
      teamName,
      matricule,
      leader_id: leaderId,
      // Only include non-empty members
      members: members.filter(
        (member) => member.memberId.trim() !== '' || member.memberName.trim() !== ''
      ),
    };

    // Replace with your API call or further processing
    console.log('Submitting team data:', teamData);
  };

  // Inline styles for enhanced UI
  const cardStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionStyle = {
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.3rem',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '0.5rem',
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: '#fff',
  };

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: '#fff',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: '#fff',
  };

  const memberCardStyle = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  };

  const memberHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '0.5rem',
  };

  const twoColumnStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const columnStyle = {
    flex: '1 1 45%',
    minWidth: '200px',
  };

  return (
    <form style={cardStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Create New Team
      </h2>

    
    
      {/* Team Members Section */}
      <div style={sectionStyle}>
        <h3>Team Members</h3>
        
        {members.map((member, index) => (
          <div key={index} style={memberCardStyle}>
            <div style={memberHeaderStyle}>
              <h4 style={{ margin: 0 }}>Member {index + 1}</h4>
              <button
                type="button"
                style={removeButtonStyle}
                onClick={() => removeMemberField(index)}
              >
                Remove
              </button>
            </div>
            
            <div style={twoColumnStyle}>
              <div style={columnStyle}>
                <label style={labelStyle} htmlFor={`memberId-${index}`}>
                  Member ID:
                </label>
                <input
                  style={inputStyle}
                  type="text"
                  id={`memberId-${index}`}
                  value={member.memberId}
                  onChange={(e) =>
                    handleMemberChange(index, 'memberId', e.target.value)
                  }
                  placeholder="Enter member ID"
                  required
                />
              </div>
              
              <div style={columnStyle}>
                <label style={labelStyle} htmlFor={`memberName-${index}`}>
                  Full Name:
                </label>
                <input
                  style={inputStyle}
                  type="text"
                  id={`memberName-${index}`}
                  value={member.memberName}
                  onChange={(e) =>
                    handleMemberChange(index, 'memberName', e.target.value)
                  }
                  placeholder="Enter member name"
                  required
                />
              </div>
              
              <div style={columnStyle}>
                <label style={labelStyle} htmlFor={`memberEmail-${index}`}>
                  Email:
                </label>
                <input
                  style={inputStyle}
                  type="email"
                  id={`memberEmail-${index}`}
                  value={member.memberEmail}
                  onChange={(e) =>
                    handleMemberChange(index, 'memberEmail', e.target.value)
                  }
                  placeholder="Enter member email"
                  required
                />
              </div>
              
              <div style={columnStyle}>
                <label style={labelStyle} htmlFor={`memberPhone-${index}`}>
                  Phone:
                </label>
                <input
                  style={inputStyle}
                  type="tel"
                  id={`memberPhone-${index}`}
                  value={member.memberPhone}
                  onChange={(e) =>
                    handleMemberChange(index, 'memberPhone', e.target.value)
                  }
                  placeholder="Enter member phone"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" style={addButtonStyle} onClick={addMemberField}>
          Add Member
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default TeamForm;