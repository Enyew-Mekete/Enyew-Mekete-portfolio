
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

class DBService {
  private dbName = 'entech_db';

  constructor() {
    this.init();
  }

  /**
   * Initializes the database (entech_db) and the table (Portfolio)
   */
  private init() {
    if (!localStorage.getItem(this.dbName)) {
      localStorage.setItem(this.dbName, JSON.stringify({ Portfolio: [] }));
    }
  }

  /**
   * Saves a new entry to the Portfolio table
   */
  async saveMessage(data: Omit<ContactMessage, 'id' | 'timestamp'>): Promise<void> {
    return new Promise((resolve) => {
      // Simulate network latency
      setTimeout(() => {
        const db = this.getDB();
        const newMessage: ContactMessage = {
          ...data,
          id: Math.random().toString(36).substr(2, 9).toUpperCase(),
          timestamp: new Date().toLocaleString()
        };
        db.Portfolio.unshift(newMessage); // Add to top
        localStorage.setItem(this.dbName, JSON.stringify(db));
        resolve();
      }, 1200);
    });
  }

  /**
   * Retrieves all entries from the Portfolio table
   */
  getMessages(): ContactMessage[] {
    return this.getDB().Portfolio;
  }

  /**
   * Helper to get the full DB object
   */
  private getDB(): { Portfolio: ContactMessage[] } {
    const raw = localStorage.getItem(this.dbName);
    return raw ? JSON.parse(raw) : { Portfolio: [] };
  }
}

export const dbService = new DBService();
