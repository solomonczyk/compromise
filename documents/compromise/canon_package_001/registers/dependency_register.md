# dependency_register

## DEP-001
- **id**: DEP-001
- **dependency**: GitHub repository baseline
- **used_in**: ['S0', 'S1']
- **owner**: Tech Lead
- **risk**: Empty or inconsistent repo
- **control**: S1 repository recovery report

## DEP-002
- **id**: DEP-002
- **dependency**: PostgreSQL-compatible hosting
- **used_in**: ['S2', 'S3', 'S5']
- **owner**: Infrastructure Owner
- **risk**: Migration drift
- **control**: migration tests and backups

## DEP-003
- **id**: DEP-003
- **dependency**: Email delivery provider
- **used_in**: ['S2', 'S5', 'S6']
- **owner**: Backend Lead
- **risk**: Notifications fail
- **control**: notification gate and retry policy

## DEP-004
- **id**: DEP-004
- **dependency**: Payment or invoice process
- **used_in**: ['S6']
- **owner**: Sales Owner
- **risk**: Payment evidence cannot be captured
- **control**: manual invoice path before automation

## DEP-005
- **id**: DEP-005
- **dependency**: Legal review for employment and data claims
- **used_in**: ['S6', 'S8']
- **owner**: Founder
- **risk**: Unclear data processing obligations
- **control**: legal review boundary before scale
