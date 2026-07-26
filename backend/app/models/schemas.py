from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

# 1. Surplus Food Listing Creation Request
class SurplusListingCreate(BaseModel):
    donor_name: str
    food_title: str
    food_category: str = Field(..., description="COOKED_MEALS, BAKERY, PRODUCE, PACKAGED, DAIRY")
    quantity_servings: int = Field(..., gt=0)
    weight_kg: float = Field(..., gt=0)
    preparation_timestamp: datetime
    storage_condition: str = Field(..., description="REFRIGERATED, HEATED, ROOM_TEMP")
    classification: str = Field("CATEGORY_A", description="CATEGORY_A (Normal/Ambient), CATEGORY_B (Cold Chain Required)")
    allergens: Optional[List[str]] = []
    pickup_address: str
    donor_phone: Optional[str] = "+91 98765 43210"
    latitude: float
    longitude: float

# 2. AI Freshness Evaluation Response
class FreshnessEvaluationResult(BaseModel):
    freshness_score: float = Field(..., ge=0.0, le=100.0)
    estimated_shelf_life_hours: float
    safety_category: str = Field(..., description="HIGHLY_FRESH, MODERATE_RESCUE, URGENT_DISPATCH, EXPIRED")
    risk_level: str = Field("LOW", description="LOW, MEDIUM, HIGH, CRITICAL")
    allergens: List[str] = []
    validation_hash: str
    ai_recommendation: str

# 3. Surplus Listing Response
class SurplusListingResponse(BaseModel):
    id: str
    donor_name: str
    donor_phone: Optional[str] = "+91 98765 43210"
    food_title: str
    food_category: str
    classification: str = "CATEGORY_A" # CATEGORY_A or CATEGORY_B
    quantity_servings: int
    weight_kg: float
    freshness_score: float
    risk_level: str = "LOW"
    allergens: List[str] = []
    validation_hash: str
    estimated_shelf_life_hours: float
    status: str
    pickup_address: str
    latitude: float
    longitude: float
    created_at: datetime

# 4. Multi-Recipient Allocation Request & Response
class SplitAllocationRequest(BaseModel):
    listing_id: str
    max_recipients: Optional[int] = 3

class NGOAllocationRecipient(BaseModel):
    ngo_id: str
    ngo_name: str
    address: str
    phone: str = "+91 98123 45678"
    contact_person: str = "Volunteer Lead"
    allocated_servings: int
    allocated_weight_kg: float
    distance_km: float
    estimated_transit_mins: int

class SplitAllocationResponse(BaseModel):
    listing_id: str
    total_servings: int
    allocations: List[NGOAllocationRecipient]
    matching_timestamp: datetime

# 5. Call Log Models (Ola-style Contact & Call Tracking)
class CallLogCreate(BaseModel):
    listing_id: Optional[str] = None
    caller_role: str = Field(..., description="DONOR, NGO, COURIER, ADMIN")
    caller_name: str
    caller_phone: str
    recipient_name: str
    recipient_phone: str
    duration_seconds: Optional[int] = 45
    status: str = Field("COMPLETED", description="COMPLETED, IN_PROGRESS, MISSED, REJECTED")
    notes: Optional[str] = "Donor and NGO coordinated food pickup location and arrival window."

class CallLogResponse(BaseModel):
    id: str
    listing_id: Optional[str]
    caller_role: str
    caller_name: str
    caller_phone: str
    recipient_name: str
    recipient_phone: str
    duration_seconds: int
    status: str
    notes: Optional[str]
    created_at: datetime

# 6. Trust Rating & Review Models
class TrustRatingCreate(BaseModel):
    target_org_id: str
    target_org_name: str
    evaluator_role: str = Field(..., description="DONOR, NGO, COURIER")
    evaluator_name: str
    rating: int = Field(..., ge=1, le=5)
    hygiene_rating: Optional[int] = Field(5, ge=1, le=5)
    punctuality_rating: Optional[int] = Field(5, ge=1, le=5)
    feedback_text: Optional[str] = "Excellent food quality and prompt pickup!"

class TrustRatingResponse(BaseModel):
    id: str
    target_org_id: str
    target_org_name: str
    evaluator_role: str
    evaluator_name: str
    rating: int
    hygiene_rating: int
    punctuality_rating: int
    feedback_text: str
    created_at: datetime

# 7. QR Verification Handshake Payload
class QRHandshakeCreate(BaseModel):
    allocation_id: str
    donor_id: str
    recipient_ngo_id: str
    servings: int

class QRVerificationResponse(BaseModel):
    handshake_id: str
    verification_token: str
    qr_code_base64: str
    status: str

class QRVerifyRequest(BaseModel):
    verification_token: str
    scanned_by_role: str

class QRVerifyResult(BaseModel):
    success: bool
    message: str
    co2_mitigated_kg: float
    meals_rescued: int
    updated_trust_score: float

# 8. Analytics & Impact Metrics
class ImpactMetricsResponse(BaseModel):
    total_meals_rescued: int
    total_co2_avoided_kg: float
    total_food_saved_tonnes: float
    active_ngo_partners: int
    verified_pickups_count: int
    average_match_time_mins: float
