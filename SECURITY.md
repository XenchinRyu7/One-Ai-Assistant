# Security Policy

## Reporting a Vulnerability

At One AI Assistant, we take security seriously. If you discover a security vulnerability, please help us protect our users by reporting it responsibly.

### 🔒 How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security issues via email:

📧 **oneaiassistantindonesia@gmail.com**

Subject line: `[SECURITY] Brief description of the issue`

### What to Include in Your Report

Please provide as much information as possible:

- **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, etc.)
- **Location** of the affected code (file path, line number, or URL)
- **Step-by-step instructions** to reproduce the issue
- **Potential impact** of the vulnerability
- **Suggested fix** (if you have one)
- **Your contact information** for follow-up questions

### What to Expect

1. **Acknowledgment**: We'll acknowledge receipt of your report within 48 hours
2. **Assessment**: We'll investigate and assess the severity (typically within 5 business days)
3. **Updates**: We'll keep you informed of our progress
4. **Resolution**: We'll work on a fix and notify you when it's deployed
5. **Credit**: With your permission, we'll credit you in our security acknowledgments

### Scope

This security policy applies to:

#### ✅ In Scope:
- The landing page website (this repository)
- Client-side vulnerabilities (XSS, CSRF, etc.)
- Authentication/authorization issues in the frontend
- Information disclosure
- Privacy concerns
- UI/UX that could lead to phishing

#### ❌ Out of Scope:
- Core chatbot product (proprietary, not open source)
- Backend APIs and services
- Third-party dependencies (report to the respective projects)
- Social engineering attacks
- Physical attacks
- Spam or DoS attacks

### Supported Versions

We provide security updates for:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| < Latest| ❌ No              |

We always recommend using the latest version of our platform.

### Security Best Practices

When contributing to this project:

#### ✅ Do:
- Keep dependencies up to date
- Use environment variables for sensitive data
- Sanitize user inputs
- Follow OWASP security guidelines
- Use HTTPS for all external connections
- Implement proper error handling

#### ❌ Don't:
- Commit API keys, secrets, or credentials
- Store sensitive data in localStorage without encryption
- Use `dangerouslySetInnerHTML` without sanitization
- Expose internal system details in error messages
- Use deprecated or vulnerable packages

### Known Security Considerations

This is a **landing page repository only**. The core product includes:

- 🔐 **End-to-end encryption** for data transmission
- 🛡️ **SOC 2 compliance** standards
- 🔑 **API key management** with rotation capabilities
- 👥 **Role-based access control** (RBAC)
- 📊 **Security audit logs**
- 🚨 **Rate limiting** and DDoS protection

For information about the security of our **SaaS product**, please visit:
- Website: https://www.oneaiassistant.id/security-details
- Privacy Policy: https://www.oneaiassistant.id/privacy-policy

### Vulnerability Disclosure Policy

- We follow **responsible disclosure** practices
- We ask for **90 days** before public disclosure
- We may publicly credit researchers (with permission)
- We **do not offer** bug bounties at this time

### Security Updates

Security patches will be:
- Released as soon as possible
- Announced in release notes
- Communicated via email to users (for critical issues)

### Security Hall of Fame

We thank the following security researchers for responsibly disclosing vulnerabilities:

*No vulnerabilities reported yet*

---

### Contact

For security concerns:
- 🔒 Email: oneaiassistantindonesia@gmail.com
- 🌐 Website: https://www.oneaiassistant.id
- 📍 Location: Jakarta, Indonesia

### Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

---

**Thank you for helping keep One AI Assistant and our users safe!** 🛡️
