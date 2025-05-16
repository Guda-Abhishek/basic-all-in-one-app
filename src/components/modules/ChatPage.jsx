import './styles/ChatPage.css';
const ChatPage = () => (
  <div className="chat-container">
  <div className="chat-section">
  
    <div style={{ padding: '2rem' }}>
<h2>AI Chat Assistant</h2>
    <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: 8 }}>
      <strong>You:</strong> What's the humidity today?
    </div>
    <div style={{ marginBottom: '1rem', backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 8 }}>
      <strong>Bot:</strong> The current humidity is 60% with light cloud cover.
    </div>

    <input
      style={{ padding: '0.5rem', width: '80%' }}
      type="text"
      placeholder="Type your message..."
    />
    <button style={{ padding: '0.5rem' }}>➤</button>    </div>
    
    </div>
    </div>
  )
  export default ChatPage
  