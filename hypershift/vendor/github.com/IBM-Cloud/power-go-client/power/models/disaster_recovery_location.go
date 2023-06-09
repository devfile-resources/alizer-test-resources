// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// DisasterRecoveryLocation disaster recovery location
//
// swagger:model DisasterRecoveryLocation
type DisasterRecoveryLocation struct {

	// regionZone of a site
	Location string `json:"location,omitempty"`

	// The list of replication sites has mapped for the given location
	ReplicationSites ReplicationSites `json:"replicationSites,omitempty"`
}

// Validate validates this disaster recovery location
func (m *DisasterRecoveryLocation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateReplicationSites(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DisasterRecoveryLocation) validateReplicationSites(formats strfmt.Registry) error {
	if swag.IsZero(m.ReplicationSites) { // not required
		return nil
	}

	if err := m.ReplicationSites.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("replicationSites")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("replicationSites")
		}
		return err
	}

	return nil
}

// ContextValidate validate this disaster recovery location based on the context it is used
func (m *DisasterRecoveryLocation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateReplicationSites(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DisasterRecoveryLocation) contextValidateReplicationSites(ctx context.Context, formats strfmt.Registry) error {

	if err := m.ReplicationSites.ContextValidate(ctx, formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("replicationSites")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("replicationSites")
		}
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *DisasterRecoveryLocation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DisasterRecoveryLocation) UnmarshalBinary(b []byte) error {
	var res DisasterRecoveryLocation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
